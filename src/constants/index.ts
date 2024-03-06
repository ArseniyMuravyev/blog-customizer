import { CSSProperties } from 'react';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from './articleProps';

interface SelectTypes {
	type: 'select' | 'radio' | 'separator';
	option?: OptionType[];
	name?: string;
	stateKey?: keyof ArticleStateType;
}

export const defaultStyles = {
	'--font-family': defaultArticleState.fontFamilyOption.value,
	'--font-size': defaultArticleState.fontSizeOption.value,
	'--font-color': defaultArticleState.fontColor.value,
	'--container-width': defaultArticleState.contentWidth.value,
	'--bg-color': defaultArticleState.backgroundColor.value,
} as CSSProperties;

export const selectTypes: SelectTypes[] = [
	{
		type: 'select',
		option: fontFamilyOptions,
		name: 'шрифт',
		stateKey: 'fontFamilyOption',
	},
	{
		type: 'radio',
		option: fontSizeOptions,
		name: 'размер шрифта',
		stateKey: 'fontSizeOption',
	},
	{
		type: 'select',
		option: fontColors,
		name: 'цвет шрифта',
		stateKey: 'fontColor',
	},
	{
		type: 'separator',
	},
	{
		type: 'select',
		option: backgroundColors,
		name: 'цвет фона',
		stateKey: 'backgroundColor',
	},
	{
		type: 'select',
		option: contentWidthArr,
		name: 'ширина контента',
		stateKey: 'contentWidth',
	},
];
