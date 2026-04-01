import React from 'react'
import { useGraphStore } from '@/hooks/useGraphStore'
import usePersistedBoolean from '@/features/hooks/usePersistedBoolean'
import { LS_KEYS, UI_COPY } from '@/lib/config'
import { lsJson, lsSetJson } from '@/lib/persistence'
import { getIconSizeClass } from '@/lib/ui'
import type {
  MarkdownPreviewPresentationApi,
  MarkdownPreviewPresentationSlideState,
} from '@/features/markdown/ui/MarkdownPreview'
import {
  useBottomPanelMarkdownModel,
  useBottomPanelMarkdownSplitView,
} from './BottomPanelMarkdownSectionModel'
import { BottomPanelMarkdownSectionView } from './BottomPanelMarkdownSectionView'
import { emitMarkdownPanelMetric } from '@/features/metrics/uiMetrics'
import {
  BOTTOM_PANEL_MARKDOWN_AUTO_OPEN_EVENT,
  BOTTOM_PANEL_MARKDOWN_OPEN_VIEWER_EVENT,
} from '@/features/bottom-panel/constants'
import type { BottomTab } from '@/features/bottom-panel/open'
import { useRootThemeMode } from '@/features/panels/views/preview-panel/ui/mermaidConfig'
import { useMarkdownApply } from './hooks/useMarkdownApply'
import { useJsonMarkdown } from './hooks/useJsonMarkdown'
import { useMarkdownPreviewTokens } from '@/features/markdown/ui/useMarkdownPreviewTokens'
import type { MarkdownGeoDatasetIntegration } from '@/features/markdown/ui/MarkdownRendererTypes'
import type { MarkdownSourceFilesPanelIntegration } from '@/features/markdown/ui/MarkdownSourceFilesPanel'
import type { MarkdownSourceFilesIngestIntegration } from '@/features/markdown/ui/MarkdownSourceFilesIngestIntegration'
import {
  createLocalMarkdownFileFromText,
  readLocalMarkdownFileText,
  syncLocalMarkdownFolderToSourceFiles,
  writeLocalMarkdownFileText,
} from '@/features/source-files/localMarkdownFolder'

export type MarkdownLayoutMode = 'split' | 'editor' | 'viewer' | 'presentation' | 'slides-gallery'

type BottomPanelMarkdownSectionProps = {
  setBottomPanelCurationView?: (view: 'grid' | 'markdown') => void
  setTabStore?: (tab: BottomTab) => void
  geoDatasetIntegration?: MarkdownGeoDatasetIntegration
  sourceFilesPanelIntegration?: MarkdownSourceFilesPanelIntegration
  sourceFilesIngestIntegration?: MarkdownSourceFilesIngestIntegration
}

export function BottomPanelMarkdownSection(props: BottomPanelMarkdownSectionProps) {
  const { setBottomPanelCurationView, geoDatasetIntegration, sourceFilesPanelIntegration, sourceFilesIngestIntegration } = props
  
  // Store selectors
  const graphData = useGraphStore(s => s.graphData)
  const selectedNodeId = useGraphStore(s => s.selectedNodeId)
  const selectedEdgeId = useGraphStore(s => s.selectedEdgeId)
  const importedMarkdownText = useGraphStore(s => s.markdownDocumentText)
  const markdownDocumentName = useGraphStore(s => s.markdownDocumentName)
  const markdownDocumentSourceUrl = useGraphStore(s => s.markdownDocumentSourceUrl)
  const jsonSourceDocumentText = useGraphStore(s => s.jsonSourceDocumentText)
  const setMarkdownDocument = useGraphStore(s => s.setMarkdownDocument)
  const applyMarkdownDocumentToGraph = useGraphStore(s => s.applyMarkdownDocumentToGraph)
  const setMarkdownDocumentSourceUrl = useGraphStore(s => s.setMarkdownDocumentSourceUrl)
  const selectNode = useGraphStore(s => s.selectNode)
  const selectEdge = useGraphStore(s => s.selectEdge)
  const setSelectionSource = useGraphStore(s => s.setSelectionSource)
  const uiIconScale = useGraphStore(s => s.uiIconScale)
  const uiIconStrokeWidth = useGraphStore(s => s.uiIconStrokeWidth)
  const uiPanelKeyValueTextSizeClass = useGraphStore(s => s.uiPanelKeyValueTextSizeClass || 'text-xs')
  const uiPanelMicroLabelTextSizeClass = useGraphStore(s => s.uiPanelMicroLabelTextSizeClass || 'text-[10px]')
  const uiPanelTextFontClass = useGraphStore(s => s.uiPanelTextFontClass || 'font-sans')
  const uiPanelMonospaceTextClass = useGraphStore(s => s.uiPanelMonospaceTextClass || 'font-mono text-xs')
  const schema = useGraphStore(s => s.schema)
  const selectionFlashDurationMs = useGraphStore(s => s.selectionFlashDurationMs || 500)
  const sourceFiles = useGraphStore(s => s.sourceFiles)
  const setJsonSourceDocument = useGraphStore(s => s.setJsonSourceDocument)
  const updateSourceFile = useGraphStore(s => s.updateSourceFile)
  const pushUiToast = useGraphStore(s => s.pushUiToast)
  const localMarkdownFolderHandle = useGraphStore(s => s.localMarkdownFolderHandle)
  const localMarkdownFolderAccessMode = useGraphStore(s => s.localMarkdownFolderAccessMode)
  const localMarkdownFolderCacheId = useGraphStore(s => s.localMarkdownFolderCacheId)
  const localMarkdownSelectedFolderPath = useGraphStore(s => s.localMarkdownSelectedFolderPath)

  const resolvedThemeMode = useGraphStore(s => s.resolvedThemeMode)
  const rootThemeMode = useRootThemeMode()
  const themeMode = resolvedThemeMode || rootThemeMode

  const {
    selectionInfo,
    selectionDocumentPath,
    activeDocumentPath,
    markdownText,
    setMarkdownText,
    isLoading,
    loadError,
    previewBasePath,
    setActiveDocumentPath,
  } = useBottomPanelMarkdownModel({
    graphData,
    schema,
    selectedNodeId,
    selectedEdgeId,
    importedMarkdownText,
    markdownDocumentName,
    markdownDocumentSourceUrl,
    setMarkdownDocument,
    setMarkdownDocumentSourceUrl,
  })

  const onSourceFileSelect = React.useCallback((id: string) => {
    const file = sourceFiles?.find(f => f.id === id)
    if (!file) return
    const lower = String(file.name || '').toLowerCase()
    const isJsonish =
      lower.endsWith('.json') ||
      lower.endsWith('.jsonld') ||
      lower.endsWith('.geojson') ||
      lower.endsWith('.csv') ||
      lower.endsWith('.yaml') ||
      lower.endsWith('.yml')

    const applyTextToView = (resolvedText: string) => {
      if (isJsonish) {
        setJsonSourceDocument(file.name, resolvedText)
        setMarkdownDocument(file.name, '')
        setMarkdownText('')
        setActiveDocumentPath(file.name)
        setMarkdownDocumentSourceUrl(file.source?.kind === 'url' ? String(file.source?.url || '').trim() || null : null)
        setBottomPanelCurationView?.('markdown')
        return
      }
      setMarkdownDocument(file.name, resolvedText)
      setMarkdownText(resolvedText)
      setActiveDocumentPath(file.name)
      setMarkdownDocumentSourceUrl(file.source?.kind === 'url' ? String(file.source?.url || '').trim() || null : null)
      setBottomPanelCurationView?.('markdown')
      void applyMarkdownDocumentToGraph(file.name, resolvedText, { force: true })
    }

    if (file.source?.kind === 'local') {
      void (async () => {
        try {
          const path = String(file.source?.path || file.name || '').trim()
          const text = await readLocalMarkdownFileText(path)
          updateSourceFile(file.id, { text })
          applyTextToView(text)
        } catch {
          const cached = String(file.text || '').trim()
          if (cached) {
            pushUiToast({ id: 'local-file-read-failed-cached', kind: 'warning', message: `Read failed; using cached copy: ${file.name}` })
            applyTextToView(file.text)
            return
          }
          const hint = localMarkdownFolderHandle || localMarkdownFolderCacheId ? 'Failed to read' : 'Re-open folder to load'
          pushUiToast({ id: 'local-file-read-failed', kind: 'error', message: `${hint}: ${file.name}` })
        }
      })()
      return
    }

    applyTextToView(file.text)
  }, [applyMarkdownDocumentToGraph, localMarkdownFolderCacheId, localMarkdownFolderHandle, pushUiToast, setActiveDocumentPath, setBottomPanelCurationView, setJsonSourceDocument, setMarkdownDocument, setMarkdownDocumentSourceUrl, setMarkdownText, sourceFiles, updateSourceFile])

  const mappedSourceFiles = React.useMemo(() => {
    return (sourceFiles || [])
      .filter(f => f.enabled)
      .map(f => ({
        ...f,
        active: f.name === markdownDocumentName,
      }))
  }, [sourceFiles, markdownDocumentName])

  React.useEffect(() => {
    const active = (sourceFiles || []).find(f => f.name === markdownDocumentName)
    if (active && active.enabled) return
    const next = (sourceFiles || []).find(f => f.enabled && String(f.text || '').trim())
    if (next) {
      onSourceFileSelect(next.id)
      return
    }
    if (active) setMarkdownDocument(null, null)
  }, [markdownDocumentName, onSourceFileSelect, setMarkdownDocument, sourceFiles])

  const markdownDocumentTextForSave = useGraphStore(s => s.markdownDocumentText)

  const handleSaveActiveLocalMarkdown = React.useCallback(() => {
    if (!localMarkdownFolderHandle) {
      if (localMarkdownFolderAccessMode === 'file-input') {
        pushUiToast({ id: 'local-file-save-readonly', kind: 'warning', message: 'Local folder is read-only in this browser.' })
      }
      return
    }
    const name = String(markdownDocumentName || '').trim()
    if (!name) return
    void (async () => {
      try {
        await writeLocalMarkdownFileText(name, markdownDocumentTextForSave || '')
        await syncLocalMarkdownFolderToSourceFiles()
        pushUiToast({ id: 'local-file-saved', kind: 'success', message: `Saved: ${name}` })
      } catch {
        pushUiToast({ id: 'local-file-save-failed', kind: 'error', message: `Failed to save: ${name}` })
      }
    })()
  }, [localMarkdownFolderAccessMode, localMarkdownFolderHandle, markdownDocumentName, markdownDocumentTextForSave, pushUiToast])

  const downloadMarkdownTextAsFile = React.useCallback((fileName: string, text: string) => {
    if (typeof document === 'undefined') return
    const safeName = String(fileName || '').trim() || 'document.md'
    const blob = new Blob([text || ''], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = safeName
    a.rel = 'noopener'
    a.style.position = 'fixed'
    a.style.left = '-9999px'
    try {
      document.body.appendChild(a)
      a.click()
    } finally {
      try {
        document.body.removeChild(a)
      } catch {
        void 0
      }
      try {
        URL.revokeObjectURL(url)
      } catch {
        void 0
      }
    }
  }, [])

  const handleSaveAsMarkdown = React.useCallback(() => {
    const text = String(markdownDocumentTextForSave || '')
    const currentName = String(markdownDocumentName || '').trim()
    const suggestedName = currentName && currentName.toLowerCase().endsWith('.md') ? currentName : 'document.md'

    if (!localMarkdownFolderHandle) {
      downloadMarkdownTextAsFile(suggestedName, text)
      pushUiToast({ id: 'local-file-savedas-download', kind: 'success', message: `Saved as download: ${suggestedName}` })
      return
    }

    const parent =
      (currentName.includes('/') ? currentName.split('/').slice(0, -1).join('/') : '') ||
      String(localMarkdownSelectedFolderPath || '').trim() ||
      null

    void (async () => {
      try {
        const created = await createLocalMarkdownFileFromText({ parentPath: parent, text })
        if (!created) return
        setMarkdownDocument(created, text)
        await syncLocalMarkdownFolderToSourceFiles()
        pushUiToast({ id: 'local-file-savedas', kind: 'success', message: `Saved as: ${created}` })
      } catch {
        pushUiToast({ id: 'local-file-savedas-failed', kind: 'error', message: 'Failed to Save As.' })
      }
    })()
  }, [
    createLocalMarkdownFileFromText,
    downloadMarkdownTextAsFile,
    localMarkdownFolderHandle,
    localMarkdownSelectedFolderPath,
    markdownDocumentName,
    markdownDocumentTextForSave,
    pushUiToast,
    setMarkdownDocument,
  ])

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = String(e.key || '').toLowerCase()
      if (key !== 's') return
      if (!(e.metaKey || e.ctrlKey)) return
      e.preventDefault()
      handleSaveActiveLocalMarkdown()
    }
    try {
      window.addEventListener('keydown', handler)
    } catch {
      void 0
    }
    return () => {
      try {
        window.removeEventListener('keydown', handler)
      } catch {
        void 0
      }
    }
  }, [handleSaveActiveLocalMarkdown])

  // UI State
  const [markdownTextHighlight, setMarkdownTextHighlight] = usePersistedBoolean(LS_KEYS.markdownTextHighlight, false)
  const selectionHighlightEnabled = markdownTextHighlight
  const [markdownWordWrap, setMarkdownWordWrap] = usePersistedBoolean(LS_KEYS.markdownWordWrap, false)
  const [markdownPresentationMode, setMarkdownPresentationMode] = usePersistedBoolean(LS_KEYS.markdownPresentationMode, false)
  const [markdownSyncScroll] = usePersistedBoolean(LS_KEYS.markdownSyncScroll, true)
  
  const [annotateDisplayMode, setAnnotateDisplayMode] = React.useState<'inline' | 'beside' | 'render'>(() => {
    if (typeof window === 'undefined') return 'inline'
    try {
      const raw = window.localStorage.getItem(LS_KEYS.markdownAnnotateDisplay)
      return raw === 'render' ? 'render' : raw === 'beside' ? 'beside' : 'inline'
    } catch {
      return 'inline'
    }
  })

  React.useEffect(() => {
    try {
      window.localStorage.setItem(LS_KEYS.markdownAnnotateDisplay, annotateDisplayMode)
    } catch {
      void 0
    }
  }, [annotateDisplayMode])

  const [markdownLayoutMode, setMarkdownLayoutMode] = React.useState<MarkdownLayoutMode>(() =>
    lsJson<MarkdownLayoutMode>(
      LS_KEYS.markdownLayoutMode,
      'viewer',
      value =>
        value === 'editor' || value === 'viewer' || value === 'split' || value === 'presentation' || value === 'slides-gallery'
          ? value
          : 'viewer',
    ),
  )

  React.useEffect(() => {
    lsSetJson<MarkdownLayoutMode>(LS_KEYS.markdownLayoutMode, markdownLayoutMode)
  }, [markdownLayoutMode])

  React.useEffect(() => {
    const handler = () => {
      setMarkdownPresentationMode(false)
      setMarkdownLayoutMode('viewer')
    }
    try {
      window.addEventListener(BOTTOM_PANEL_MARKDOWN_OPEN_VIEWER_EVENT, handler)
    } catch {
      void 0
    }
    return () => {
      try {
        window.removeEventListener(BOTTOM_PANEL_MARKDOWN_OPEN_VIEWER_EVENT, handler)
      } catch {
        void 0
      }
    }
  }, [setMarkdownPresentationMode])

  const [markdownViewerWidthMode, setMarkdownViewerWidthMode] = React.useState<'standard' | 'wide'>(() =>
    lsJson<'standard' | 'wide'>(
      LS_KEYS.markdownViewerWidthMode,
      'standard',
      value => (value === 'standard' || value === 'wide' ? value : 'standard'),
    ),
  )

  React.useEffect(() => {
    lsSetJson<'standard' | 'wide'>(LS_KEYS.markdownViewerWidthMode, markdownViewerWidthMode)
  }, [markdownViewerWidthMode])

  const iconSizeClass = getIconSizeClass(uiIconScale)

  // JSON Hook
  const {
    jsonMarkdownMode,
    setJsonMarkdownMode,
    jsonMarkdownSuggestedMode,
    jsonModeEnabled,
    isJsonBacked,
    deferredMarkdownText,
  } = useJsonMarkdown({
    jsonSourceDocumentText,
    markdownDocumentText: markdownText,
    markdownDocumentName,
    setMarkdownDocument,
    setMarkdownText,
  })

  const resolvedMarkdownTextForEditor = React.useMemo(() => {
    return String(markdownText || deferredMarkdownText || '')
  }, [deferredMarkdownText, markdownText])

  // Token Sharing
  const tokens = useMarkdownPreviewTokens(
    deferredMarkdownText || markdownText || '',
    undefined,
    previewBasePath || activeDocumentPath,
    true
  )

  // Apply Hook
  const { applyStatus, handleApplyMarkdown } = useMarkdownApply({
    markdownText,
    isJsonBacked,
    selectionDocumentPath,
    markdownDocumentName,
    activeDocumentPath,
    hasSelection: !!selectionInfo,
  })

  // Split View Hook
  const {
    editorTextAreaRef,
    viewerRef,
    handleViewerScroll,
    syncViewerFromEditor,
    lineHeightPx,
    editorPaddingTopPx,
    editorRowStartByLine,
    editorContentHeightPx,
    editorGutterWidthCh,
    visibleLineRange,
    highlightedLineRange,
  } = useBottomPanelMarkdownSplitView({
    markdownText,
    markdownWordWrap,
    selectionInfo,
    uiPanelMonospaceTextClass,
    syncScroll: markdownSyncScroll,
  })

  // Layout Sync
  const prevLayoutModeRef = React.useRef<MarkdownLayoutMode | null>(null)
  React.useEffect(() => {
    const prev = prevLayoutModeRef.current
    prevLayoutModeRef.current = markdownLayoutMode
    if (!markdownSyncScroll) return
    if (markdownLayoutMode !== 'split') return
    const ta = editorTextAreaRef.current
    const viewer = viewerRef.current
    if (!ta || !viewer) return
    if (prev === 'viewer') {
      handleViewerScroll()
    } else if (prev === 'editor') {
      if (syncViewerFromEditor) syncViewerFromEditor()
    }
  }, [editorTextAreaRef, handleViewerScroll, markdownLayoutMode, markdownSyncScroll, viewerRef, syncViewerFromEditor])

  // Presentation State
  const presentationApiRef = React.useRef<MarkdownPreviewPresentationApi | null>(null)
  const [presentationSlideState, setPresentationSlideState] = React.useState<MarkdownPreviewPresentationSlideState | null>(null)
  const [pendingFullscreenRequest, setPendingFullscreenRequest] = React.useState(false)

  React.useEffect(() => {
    if (!markdownPresentationMode) return
    if (!pendingFullscreenRequest) return
    let cancelled = false
    let timer: number | null = null
    let raf: number | null = null
    const schedule = (fn: () => void) => {
      try {
        const w = window as unknown as { requestAnimationFrame?: (cb: () => void) => number }
        if (typeof w.requestAnimationFrame === 'function') {
          raf = w.requestAnimationFrame(fn)
          return
        }
      } catch {
        void 0
      }
      timer = setTimeout(fn, 0)
    }
    const run = () => {
      if (cancelled) return
      const api = presentationApiRef.current
      const enter = api?.enterFullscreen
      if (typeof enter === 'function') {
        enter()
        setPendingFullscreenRequest(false)
        return
      }
      schedule(run)
    }
    schedule(run)
    return () => {
      cancelled = true
      if (timer != null) {
        try {
          clearTimeout(timer)
        } catch {
          void 0
        }
      }
      if (raf != null) {
        try {
          window.cancelAnimationFrame(raf)
        } catch {
          void 0
        }
      }
    }
  }, [markdownPresentationMode, pendingFullscreenRequest])

  const handleFullscreenToggleRequested = React.useCallback(() => {
    setMarkdownPresentationMode(true)
    setPendingFullscreenRequest(true)
  }, [setMarkdownPresentationMode])

  React.useEffect(() => {
    if (!markdownPresentationMode) {
      setPresentationSlideState(null)
    }
  }, [markdownPresentationMode])

  React.useEffect(() => {
    if (!markdownPresentationMode) return
    if (!presentationSlideState) return
    emitMarkdownPanelMetric('markdownPresentationSlideStateChanged', {
      activeIndex: presentationSlideState.activeSlideIndex,
      slideCount: presentationSlideState.slideCount,
    })
  }, [markdownPresentationMode, presentationSlideState])

  // Flash Selection
  const [flashSelectionId, setFlashSelectionId] = React.useState<string | null>(null)
  React.useEffect(() => {
    const id = selectionInfo?.id || null
    if (!id) {
      setFlashSelectionId(null)
      return
    }
    setFlashSelectionId(id)
    let timer: number | null = null
    try {
      timer = setTimeout(() => {
        setFlashSelectionId(current => (current === id ? null : current))
      }, selectionFlashDurationMs)
    } catch {
      timer = null
    }
    return () => {
      if (timer != null) {
        try {
          clearTimeout(timer)
        } catch {
          void 0
        }
      }
    }
  }, [selectionInfo?.id, selectionFlashDurationMs])

  // Auto Open Highlight
  const [autoOpenHighlight, setAutoOpenHighlight] = React.useState(false)
  React.useEffect(() => {
    let timer: number | null = null
    const handler = () => {
      setAutoOpenHighlight(true)
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        setAutoOpenHighlight(false)
        timer = null
      }, 1200)
    }
    try {
      window.addEventListener(BOTTOM_PANEL_MARKDOWN_AUTO_OPEN_EVENT, handler)
    } catch {
      void 0
    }
    return () => {
      try {
        window.removeEventListener(BOTTOM_PANEL_MARKDOWN_AUTO_OPEN_EVENT, handler)
        if (timer) clearTimeout(timer)
      } catch {
        void 0
      }
    }
  }, [])

  // Derived Values
  const markdownIngestionKind = React.useMemo(() => {
    const meta = graphData && graphData.metadata
    if (!meta || typeof meta !== 'object' || Array.isArray(meta)) return null
    const ingestionMetrics = (meta as Record<string, unknown>).ingestionMetrics
    if (!ingestionMetrics || typeof ingestionMetrics !== 'object' || Array.isArray(ingestionMetrics)) {
      return null
    }
    const record = ingestionMetrics as Record<string, unknown>
    const rawKind = record.kind
    return typeof rawKind === 'string' ? rawKind : null
  }, [graphData])

  const isMarkdownLargeSummary = markdownIngestionKind === 'markdown-large'
  const hasMarkdown = !!(resolvedMarkdownTextForEditor && resolvedMarkdownTextForEditor.trim())

  const status = React.useMemo((): { ok: boolean | null; msg: string; details?: string } => {
    if (isLoading) return { ok: null, msg: UI_COPY.bottomPanelMarkdownStatusLoading }
    if (loadError) return { ok: false, msg: UI_COPY.bottomPanelMarkdownStatusError, details: loadError }
    if (hasMarkdown) return { ok: true, msg: UI_COPY.bottomPanelMarkdownStatusReady, details: markdownDocumentName || undefined }
    return { ok: null, msg: UI_COPY.bottomPanelMarkdownStatusReady }
  }, [hasMarkdown, isLoading, loadError, markdownDocumentName])

  const markdownPreviewText = React.useMemo(() => {
    const raw = deferredMarkdownText || markdownText || ''
    const previewMaxChars = 180000
    if (raw.length <= previewMaxChars) return raw
    const slice = raw.slice(0, previewMaxChars)
    const lastNewline = slice.lastIndexOf('\n')
    if (lastNewline > previewMaxChars - 4000 && lastNewline > 0) {
      return slice.slice(0, lastNewline)
    }
    return slice
  }, [deferredMarkdownText, markdownText])

  const isMarkdownPreviewTruncated = React.useMemo(() => {
    const raw = deferredMarkdownText || markdownText || ''
    const previewMaxChars = 180000
    if (!raw) return false
    if (raw.length <= previewMaxChars) return false
    return markdownPreviewText.length < raw.length
  }, [deferredMarkdownText, markdownPreviewText, markdownText])

  return (
    <BottomPanelMarkdownSectionView
      autoOpenHighlight={autoOpenHighlight}
      uiPanelKeyValueTextSizeClass={uiPanelKeyValueTextSizeClass}
      uiPanelMicroLabelTextSizeClass={uiPanelMicroLabelTextSizeClass}
      uiPanelTextFontClass={uiPanelTextFontClass}
      uiPanelMonospaceTextClass={uiPanelMonospaceTextClass}
      isJsonBacked={isJsonBacked}
      jsonModeEnabled={jsonModeEnabled}
      jsonMarkdownMode={jsonMarkdownMode}
      setJsonMarkdownMode={setJsonMarkdownMode}
      jsonMarkdownSuggestedMode={jsonMarkdownSuggestedMode}
      status={status}
      applyStatus={applyStatus}
      isMarkdownLargeSummary={isMarkdownLargeSummary}
      markdownPresentationMode={markdownPresentationMode}
      markdownLayoutMode={markdownLayoutMode}
      setMarkdownLayoutMode={setMarkdownLayoutMode}
      markdownViewerWidthMode={markdownViewerWidthMode}
      setMarkdownViewerWidthMode={setMarkdownViewerWidthMode}
      annotateDisplayMode={annotateDisplayMode}
      setAnnotateDisplayMode={setAnnotateDisplayMode}
      iconSizeClass={iconSizeClass}
      uiIconStrokeWidth={uiIconStrokeWidth}
      markdownWordWrap={markdownWordWrap}
      setMarkdownWordWrap={setMarkdownWordWrap}
      editorGutterWidthCh={editorGutterWidthCh}
      editorContentHeightPx={editorContentHeightPx}
      editorTextAreaRef={editorTextAreaRef}
      selectionHighlightEnabled={selectionHighlightEnabled}
      highlightedLineRange={highlightedLineRange}
      editorRowStartByLine={editorRowStartByLine}
      visibleLineRange={visibleLineRange}
      flashSelectionId={flashSelectionId}
      selectionInfo={selectionInfo}
      editorPaddingTopPx={editorPaddingTopPx}
      lineHeightPx={lineHeightPx}
      markdownText={markdownText}
      resolvedMarkdownTextForEditor={resolvedMarkdownTextForEditor}
      setMarkdownText={setMarkdownText}
      setMarkdownDocument={setMarkdownDocument}
      markdownDocumentName={markdownDocumentName}
      markdownPreviewText={markdownPreviewText}
      previewBasePath={previewBasePath}
      viewerRef={viewerRef}
      markdownTextHighlight={markdownTextHighlight}
      setMarkdownTextHighlight={setMarkdownTextHighlight}
      presentationApiRef={presentationApiRef}
      presentationSlideState={presentationSlideState}
      setPresentationSlideState={setPresentationSlideState}
      handleViewerScroll={handleViewerScroll}
      setMarkdownPresentationMode={setMarkdownPresentationMode}
      isMarkdownPreviewTruncated={isMarkdownPreviewTruncated}
      handleApplyMarkdown={handleApplyMarkdown}
      onFullscreenToggleRequested={handleFullscreenToggleRequested}
      onShowInGraphDataTable={() => {
        if (setBottomPanelCurationView) setBottomPanelCurationView('grid')
      }}
      selectNode={selectNode}
      selectEdge={selectEdge}
      setSelectionSource={setSelectionSource}
      themeMode={themeMode}
      syncViewerFromEditor={syncViewerFromEditor}
      tokens={tokens}
      sourceFiles={mappedSourceFiles}
      onSourceFileSelect={onSourceFileSelect}
      sourceFilesPanelIntegration={sourceFilesPanelIntegration}
      sourceFilesIngestIntegration={sourceFilesIngestIntegration}
      onSaveRequested={handleSaveActiveLocalMarkdown}
      onSaveAsRequested={handleSaveAsMarkdown}
      geoDatasetIntegration={geoDatasetIntegration}
    />
  )
}
