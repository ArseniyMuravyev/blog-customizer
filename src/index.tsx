import clsx from 'clsx';
import {
	CSSProperties,
	StrictMode,
	SyntheticEvent,
	useRef,
	useState,
} from 'react';
import { createRoot } from 'react-dom/client';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { Article } from './components/article/Article';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';
import styles from './styles/index.module.scss';

import { useOutsideClickClose } from './components/select/hooks/useOutsideClickClose';
import { defaultStyles } from './constants';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [selectedOptions, setSelectedOptions] =
		useState<ArticleStateType>(defaultArticleState);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [style, setStyle] = useState(defaultStyles);

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		setStyle({
			'--font-family': selectedOptions.fontFamilyOption.value,
			'--font-size': selectedOptions.fontSizeOption.value,
			'--font-color': selectedOptions.fontColor.value,
			'--container-width': selectedOptions.contentWidth.value,
			'--bg-color': selectedOptions.backgroundColor.value,
		} as CSSProperties);
	};

	const rootRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onChange: setIsOpen,
	});

	const handleReset = () => {
		setSelectedOptions(defaultArticleState);
		setStyle(defaultStyles);
	};

	return (
		<div className={clsx(styles.main)} style={style}>
			<div ref={rootRef}>
				<ArticleParamsForm
					selectedOptions={selectedOptions}
					setSelectedOptions={setSelectedOptions}
					handleSubmit={handleSubmit}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					handleReset={handleReset}
				/>
			</div>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
