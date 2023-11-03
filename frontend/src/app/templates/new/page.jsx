import React from 'react';
import LanguageInputs from "@/shared/ui/LanguageInputs";
import TemplateForm from "@/widgets/templates/ui/template-form";
import UITitle from "@/shared/uikit/UITitle";

const Page = ({searchParams}) => {
    return (
        <div className={'flex grow flex-col items-center'}>
            <UITitle className={'py-8'}>New Text Template</UITitle>
            <TemplateForm searchParam={searchParams?.language}/>
        </div>
    );
};

export default Page;
