import styled, { css, keyframes } from 'styled-components';

interface RectangleProps {
	height?: number | string;
	width?: string | number;
	className?: string;
}

export default function Shimmer({ height, className, width }: RectangleProps) {
	return <StyledShimmerBox height={height} className={className} width={width} />;
}

const MovingBarAnimation = keyframes`
	0% {
		background-position: -1000px 0;
	}
	100% {
		background-position: 1000px 0;
	}	
`;

export const ShimmerEffect = css`
	background: rgb(2, 0, 36);
	background: ${(props) =>
		props.theme.isDark
			? `linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, rgba(255, 255, 255, 0.1183823871345413) 39%, rgba(0, 212, 255, 0) 100%)`
			: 'linear-gradient(90deg, rgba(210,210,210,0.3) 0%, rgba(255,255,255,0.1183823871345413) 39%, rgba(210,210,210,0.300455216266194) 100%)'};
	background-size: 1000px 100%;
	animation: ${MovingBarAnimation} 2s infinite;
`;

const StyledShimmerBox = styled.span<RectangleProps>`
	${ShimmerEffect}
	height: ${(props) =>
		typeof props.height === 'number' ? `${props.height}px` : props.height ?? '38px'};
	width: ${(props) =>
		typeof props.width === 'number' ? `${props.width}px` : props.width ?? '234px'};
	border-radius: 6px;
	display: inline-block;
`;
