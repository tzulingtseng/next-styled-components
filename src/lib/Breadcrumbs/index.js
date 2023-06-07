import React, { Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Typography from '../Typography';

// 路徑 需要連結
const StyledPath = styled('a')(({ theme, href }) => ({
    display: 'inline-block',
    textDecoration: 'none',
    color: isEmpty(href) ? theme.colors.grey4 : theme.colors.primary,
}));

// 分隔符號
const StyledSeparate = styled('span')(({ theme, hidden }) => ({
    display: hidden ? 'none' : 'inline-block',
    padding: theme.getSpacing(0.5),
    color: theme.colors.grey2,
}));

const Breadcrumbs = ({ paths, theme }) => {
    console.log('theme', theme);
    return (
        <Fragment>
            {/* TODO:draft div tag */}
            <div>
                {paths &&
                    paths.map((item, i) => (
                        <span key={i}>
                            <StyledPath href={item.path}>
                                {/* TODO:FIX Typography 動態設定顏色*/}
                                <Typography
                                    style={{
                                        color: isEmpty(item.path)
                                            ? '#60797C'
                                            : '#60C4F8',
                                    }}
                                >
                                    {item.text}
                                </Typography>
                                {/* <Typography>{item.text}</Typography> */}
                            </StyledPath>
                            <StyledSeparate hidden={i === paths.length - 1}>
                                /
                            </StyledSeparate>
                            {/* {i !== paths.length - 1 && <StyledSeparate>/</StyledSeparate>} */}
                        </span>
                    ))}
            </div>
        </Fragment>
    );
};

// Breadcrumbs.propTypes = {
//     paths: propTypes.arrayOf(
//         propTypes.shape({
//             path: propTypes.string,
//             text: propTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default Breadcrumbs;
