import styled from 'styled-components';

interface StylingProps {
	color?: string;
	variant?: 'normal' | 'small' | 'subtitle' | 'title';
    fontSize?: string;
	gutterBottom?: boolean;
	inline?: boolean;
	textAlign?: 'center' | 'left' | 'right';
	contained?: boolean | 'outline';
	fontWeight?:
		| 'bold'
		| 'normal'
		| 'thin'
		| 'extralight'
		| 'light'
		| 'medium'
		| 'semibold'
		| 'extrabold'
		| 'black';
}

const weightMapping: Record<NonNullable<StylingProps['fontWeight']>, number> = {
	bold: 700,
	normal: 500,
	black: 900,
	extrabold: 800,
	extralight: 200,
	light: 300,
	medium: 500,
	semibold: 600,
	thin: 100,
};

const Typography = styled.p<StylingProps>`
	margin: 0;
	font-family: Arial, Helvetica, sans-serif;
	font-style: normal;
    font-size: ${(props) => (props.fontSize ?? '1rem')};
	font-weight: ${(props) =>
		props.variant === 'title'
			? weightMapping.bold
			: weightMapping[props.fontWeight ?? 'normal']};
	margin-bottom: ${(props) => (props.gutterBottom ? '1rem' : 0)};

	display: ${(props) => (props.inline ? 'inline-block' : 'block')};
    color: ${(props) => props.color ?? 'black' };
	text-align: ${(props) => props.textAlign};
	border-radius: 4px;
	padding: ${(props) =>
		props.inline ? '0.25rem 0.75rem' : typeof props.contained !== 'undefined' ? '' : 0};
    
`;

export default Typography;
