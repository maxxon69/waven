import React from 'react';
import Image from 'next/image'
import UiTextField from "@/shared/uikit/UITextField";
import {defaultLanguages, languageImages} from "@/shared/utils/languages";

const LanguageInputs = ({label, register}) => {

    return (
        <div className={'flex flex-col gap-2'}>
            {
                label && <label className={'text-white text-sm'} htmlFor="">{label}</label>
            }

            {
                defaultLanguages.map(language => (
                    <div key={language} className={'flex items-center gap-2 relative'}>
                        <Image className={'absolute left-[-32px] rounded-full'}
                               src={languageImages[language].src} width={24} height={24} alt={language}/>
                        <UiTextField inputProps={{className: 'w-32', ...register(`text.${language}.name`)}}/>
                    </div>
                ))
            }

        </div>

    );
};

export default LanguageInputs;
