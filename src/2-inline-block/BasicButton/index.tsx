import * as React from 'react';
import {rule, lightTheme as theme, useRule, useTheme} from 'nano-theme';
import {Link} from '../../1-inline/Link';
import {Ripple} from '../../misc/Ripple';

export const blockClass = rule({
  ...theme.font.ui1.mid,
  fz: '14px',
  cur: 'pointer',
  userSelect: 'none',
  trs: 'background .12s ease-in 0s, opacity .12s ease-in 0s',
  d: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  bdrad: '3px',
  bg: 'transparent',
  bd: 0,
  mar: 0,
  pad: 0,
  out: 0,
  ov: 'visible',
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
});

const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

export interface BasicButtonProps extends React.AllHTMLAttributes<any> {
  to?: string;
  border?: boolean;
  fill?: boolean;
  size?: number;
  width?: 'auto' | number | string;
  height?: number | string;
  round?: boolean;
  title?: string;
  positive?: boolean;
  transparent?: boolean;
  compact?: boolean;
  onClick?: React.MouseEventHandler;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
  to,
  border,
  fill,
  size = 24,
  width = size,
  height = size,
  round,
  title,
  positive,
  transparent,
  onClick,
  children,
  compact,
  className = '',
  ...rest
}) => {
  const theme = useTheme();
  const {isLight} = theme;
  const bgFactor = isLight ? 1 : 1.1;

  const dynamicBlockClass = useRule(({g}) => ({
    col: g(0.2),
    svg: {
      fill: g(0.5),
      col: g(0.5),
    },
    '&:hover': {
      col: g(0.2),
      bg: g(0, 0.08 * bgFactor),
    },
    '&:active': {
      bg: g(0, 0.16 * bgFactor),
    },
  }));

  const fillBlockClass = useRule(({g}) => ({
    bg: transparent ? 'transparent' : g(0, 0.04 * bgFactor),
    '&:hover': {
      bg: g(0, 0.08 * bgFactor),
    },
    '&:active': {
      bg: g(0, 0.16 * bgFactor),
    },
  }));

  const borderClass = useRule(({g}) => ({
    bd: `1px solid ${g(0, 0.16 * bgFactor)}`,
    boxShadow: `0 0 2px ${g(0, 0.04 * bgFactor)}`,
  }));

  const style: React.CSSProperties = {
    height,
  };

  if (width === 'auto') {
    style.paddingLeft = compact ? 8 : 16;
    style.paddingRight = compact ? 8 : 16;
  } else {
    style.width = width;
  }

  if (round) {
    style.borderRadius = '50%';
  }

  return (
    <Ripple ms={1_500} color={positive ? theme.color.sem.positive[0] : theme.g(0, 0.08)}>
      <Link
        {...rest}
        a={!!to}
        className={
          className + blockClass + dynamicBlockClass + (border ? borderClass : '') + (fill ? fillBlockClass : '')
        }
        style={style}
        title={title}
        onClick={to ? undefined : onClick}
        onDragStart={handleDragStart}
        to={to}
        data-testid="BasicButton"
      >
        {children}
      </Link>
    </Ripple>
  );
};

export default BasicButton;
