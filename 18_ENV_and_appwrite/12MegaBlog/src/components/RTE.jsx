import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import conf from '../conf/conf.js';

// NOTE: This component accepts 'control' from the parent form. 
// 'control' is how react-hook-form manages state for complex external components like TinyMCE.
export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    {/* 
        NOTE: The Controller acts as a bridge. 
        It connects the TinyMCE editor to the parent's react-hook-form state.
    */}
    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => ( // tracking onChange event  inform me if there is any change on this field  with render 
        <Editor
        apiKey={conf.tinymceApiKey}
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        // When the editor content changes, we pass the new value to react-hook-form's onChange
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}