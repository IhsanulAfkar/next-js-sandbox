'use client'
import { NextPage } from 'next'
import { useState } from 'react'
import { createEditor } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'

const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]
const SlatePage: NextPage= ({}) => {
    const [editor] = useState(() => withReact(createEditor()))
    // Render the Slate context.
    return (
        <Slate editor={editor} initialValue={initialValue}>
          <Editable />
        </Slate>
      )
}

export default SlatePage
