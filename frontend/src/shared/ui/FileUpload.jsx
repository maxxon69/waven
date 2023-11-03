'use client'
import {Controller} from "react-hook-form";
import {useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import UIButton from "@/shared/uikit/UIButton";

const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API

const FileUpload = ({control, getValues, type}) => {
    const inputRef = useRef()
    const imageValue = getValues('image')
    const initialImage = {
        create: imageValue, update: `${NEXT_PUBLIC_API}images/items/${imageValue}`
    }[type]

    const [imageUrl, setImageUrl] = useState(initialImage)
    return (
        <>

            {imageUrl ?
                <>

                    <Image src={imageUrl} height={128} width={128} alt={'image'}
                           className={'max-w-[128px] max-h-[128px] object-cover rounded'}/>
                    <UIButton className={'w-fit text-sm px-1 py-0.5'} onClick={() => setImageUrl(null)}>Delete
                        Image</UIButton>
                </>
                :
                <>
                    <Controller
                        control={control}
                        name={"image"}
                        rules={{required: "Recipe picture is required"}}
                        render={({field: {value, onChange, ...field}}) => {
                            return (
                                <input
                                    {...field}
                                    onChange={(event) => {
                                        onChange(event.target.files[0]);
                                        const url = URL.createObjectURL(event.target.files[0])
                                        setImageUrl(url)
                                    }}
                                    type="file"
                                    id="picture"
                                    ref={inputRef}
                                    className={'hidden'}
                                />
                            );
                        }}
                    />
                    <UIButton
                        type={'button'}
                        className={'h-32 w-32 bg-dark border-2 border-dashed rounded border-white flex items-center justify-center text-white text-[100px]'}
                        onClick={() => inputRef.current.click()}>+</UIButton>
                </>

            }

        </>
    );
};

export default FileUpload;
