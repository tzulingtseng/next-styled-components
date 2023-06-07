import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../Icon';

const ICON_MAP = {
    NEXT: 'fa-angle-right',
    PREVIOUS: 'fa-angle-left',
    TOP: 'fa-angle-double-left',
    END: 'fa-angle-double-right',
};

const getIconColor = (accessible, theme) => {
    return accessible ? theme.colors.primary : theme.colors.grey2;
};

const PaginationBox = styled('div')({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const PagesBox = styled('div')({
    display: 'inline-flex',
});

const PageNumber = styled('span')(({ theme, active }) => ({
    border: `1px solid ${active ? theme.colors.primary : theme.colors.grey1}`,
    padding: `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
    borderRadius: theme.radius,
    marginRight: theme.getSpacing(1),
    color: active ? theme.colors.primary : theme.colors.grey2,
}));

const StyledIcon = styled(Icon)(({ theme, accessible }) => ({
    color: getIconColor(accessible, theme),
    marginRight: theme.getSpacing(1),
}));

// 上一頁
// 下一頁
// 第一頁
// 最後一頁

// 當前頁數
// 總頁數
// 每頁筆數

const getPages = (totalPages, groupPagesCount) => {
    const pages = Math.ceil(totalPages / groupPagesCount);
    // console.log('pages', pages);
    return Array.from({ length: pages }, (_, index) => index + 1);
    //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

const Pages = ({ pages, currentPage, handlePageChange }) => {
    return (
        <PagesBox>
            {pages &&
                pages.map((page, index) => {
                    const isActive = currentPage === page;
                    return (
                        <PageNumber
                            key={`page_${index}`}
                            active={isActive}
                            onClick={handlePageChange(page)}
                        >
                            {page}
                        </PageNumber>
                    );
                })}
        </PagesBox>
    );
};

const onPageChange = () => true;

const pageChange = (onPageChange) => (page) => () => {
    onPageChange(page);
};

const Pagination = ({ currentPage, groupPagesCount, totalPages, ...props }) => {
    const pages = getPages(totalPages, groupPagesCount);
    const handlePageChange = pageChange(onPageChange);

    return (
        <PaginationBox {...props}>
            <StyledIcon
                icon={ICON_MAP.TOP}
                accessible={currentPage !== 1}
                onClick={handlePageChange(1)}
            ></StyledIcon>
            <StyledIcon
                icon={ICON_MAP.PREVIOUS}
                accessible={currentPage !== 1}
                onClick={handlePageChange(currentPage - 1)}
            ></StyledIcon>
            <Pages
                pages={pages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            ></Pages>
            <StyledIcon
                icon={ICON_MAP.NEXT}
                accessible={currentPage !== 1}
                onClick={handlePageChange(currentPage + 1)}
            ></StyledIcon>
            <StyledIcon
                icon={ICON_MAP.END}
                accessible={currentPage !== 1}
                onClick={handlePageChange(pages.length)}
            ></StyledIcon>
        </PaginationBox>
    );
};

export default Pagination;
