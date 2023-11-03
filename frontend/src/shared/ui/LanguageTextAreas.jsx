'use client'
import Image from 'next/image'
import UITextArea from "@/shared/uikit/UITextArea";
import {defaultLanguages, languageImages} from "@/shared/utils/languages";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {clsx} from "clsx";
import {useCustomSearchParams} from "@/shared/hooks/useCustomSearchParams";

const LanguageTextAreas = ({label, register, name = 'html'}) => {
   const { queryParams, setSearchParam}=useCustomSearchParams('language')
    return (
        <div className={'flex flex-col items-center'}>
            {
                label && <label className={'text-white text-sm'} htmlFor="">{label}</label>
            }
            <ul className={'flex items-center gap-4'}>
                {
                    defaultLanguages.map(language => (
                        <li className={clsx('cursor-pointer rounded-t-sm p-1 border-white border-l-2 border-t-2 border-r-2', language!==queryParams.get('language')&&'opacity-20')}
                            onClick={() => setSearchParam(language)} key={language}>
                            <Image className={'rounded-full'}
                                   src={languageImages[language].src} width={24} height={24} alt={language}/>
                        </li>
                    ))
                }

            </ul>

            {
                defaultLanguages.map(language => (
                    <div key={language}
                         className={clsx('flex items-center gap-2 relative', language !== queryParams.get('language') && 'hidden')}>
                        <UITextArea inputProps={{
                            className: 'w-64',
                            placeholder: language, ...register(`text.${language}.${name}`)
                        }}/>
                    </div>
                ))
            }

        </div>

    );
};

export default LanguageTextAreas;
