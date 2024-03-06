import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { FC, SyntheticEvent } from 'react';
import { selectTypes } from 'src/constants';
import { ArticleStateType, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';
import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	selectedOptions: ArticleStateType;
	setSelectedOptions: React.Dispatch<React.SetStateAction<ArticleStateType>>;
	handleSubmit: (event: SyntheticEvent) => void;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleReset: () => void;
}

export const ArticleParamsForm: FC<ArticleParamsFormProps> = ({
	selectedOptions,
	setSelectedOptions,
	handleSubmit,
	isOpen,
	setIsOpen,
	handleReset,
}) => {
	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	const handleOptionChange = (
		optionType: keyof ArticleStateType,
		selectedOption: OptionType
	) => {
		setSelectedOptions((prevState) => ({
			...prevState,
			[optionType]: selectedOption,
		}));
	};

	return (
		<>
			<ArrowButton handleClick={handleClick} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase dynamicLite>
						задайте параметры
					</Text>
					{selectTypes.map((type, index) =>
						type.type === 'separator' ? (
							<Separator key={index} />
						) : type.type === 'select' ? (
							<Select
								key={type.name}
								selected={
									selectedOptions[type.stateKey as keyof ArticleStateType]
								}
								onChange={(selectedOption) =>
									handleOptionChange(
										type.stateKey as keyof ArticleStateType,
										selectedOption
									)
								}
								options={type.option}
								title={type.name}
							/>
						) : (
							<RadioGroup
								key={type.name}
								name={type.name}
								selected={
									selectedOptions[type.stateKey as keyof ArticleStateType]
								}
								onChange={(selectedOption) =>
									handleOptionChange(
										type.stateKey as keyof ArticleStateType,
										selectedOption
									)
								}
								options={type.option}
								title={type.name}
							/>
						)
					)}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' onClick={handleSubmit} />
					</div>
				</form>
			</aside>
		</>
	);
};
