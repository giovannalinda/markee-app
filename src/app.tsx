import { useFiles } from 'hooks/usefiles'
import { Sidebar } from 'components/sidebar/sidebar'
import { Content } from 'components/content/content'
import styled from 'styled-components/macro'

export function App () {
  const {
    files,
    inputRef,
    createNewFile,
    updateFileName,
    selectFile,
    updateFileContent,
    handleDelete,
  } = useFiles()

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={createNewFile}
        onSelectFile={selectFile}
        onRemoveFile={handleDelete}

      />
      <Content
        inputRef={inputRef}
        onUpdateFileName={updateFileName}
        file={files.find(file => file.active)}
        onUpdateFileContent={updateFileContent}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
