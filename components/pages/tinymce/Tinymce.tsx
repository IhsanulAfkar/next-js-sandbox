'use client'
import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useTheme } from 'next-themes';
import Markdown from 'react-markdown'
import { TinyMCEReadme } from './content';
import TextModal from './TextModal';
const TinyMCE = () => {
  const editorRef = useRef<any>();
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false);
  const [editorTheme, setEditorTheme] = useState("oxide");
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    setEditorTheme(theme === "dark" ? "oxide-dark" : "oxide");
  }, [theme]);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted || !theme) return null
 
  return (
    <>
      <p className='font-bold text-xl'>Example</p>
      <hr />
      <Editor
        tinymceScriptSrc='/tinymce/tinymce.min.js'
        licenseKey='gpl'
        onInit={(_evt, editor) => {
          editorRef.current = {
            editor
          }
        }}
        initialValue='<p>This is the initial content of the editor.</p> <p><strong>This is BOLD</strong></p> <p><em>This is Italic</em></p> <p><span style="text-decoration: underline;">and this is underlined</span></p> <ol> <li>List 1</li> <li>List 2</li> <li>List 3</li> </ol>'
        init={{
          height: 500,
          menubar: true,
          skin: editorTheme,
          content_css: theme === "dark" ? "dark" : "default",
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
        }}
      />

      <button onClick={() => setOpenModal(true)}>Show editor content</button>
      <hr />
      <p className='font-bold text-xl'>Setup</p>
      <div className='prose dark:prose-invert max-w-max'>
        <Markdown >{TinyMCEReadme}</Markdown>
      </div>
      <TextModal openModal={openModal} setOpenModal={setOpenModal} content={editorRef?.current?.editor?.getContent()} />
    </>
  );
}
export default TinyMCE