import React from 'react'
import styled from 'styled-components';

const Article = (props) => {
    const{
        position,
        article,
        articleList,
        handleSetArticleList,
        showxicon,
    }=props;

    const removeEntry = cod => {
        handleSetArticleList(articleList.filter((item)=>item.id!==cod))
    }
    
    return (
        <div className="row mb-2 mb-sm-0 py-25 ">
            <div className="d-none d-sm-block col-1">{position+1}</div>
            <div className="col-9 col-sm-5">{article.description}</div>
            <div className="d-none d-sm-block col-2">{article.qty}</div>
            <div className="d-none d-sm-block col-2 text-95 text-right">{article.price}€</div>
            <div className="col-2 col-sm-1 text-secondary-d2 text-right">{article.total}€</div>
            <Xicon showxicon={showxicon} type="button" className="btn-close col-1" onClick={()=>removeEntry(article.id)}></Xicon>
        </div>
    )
}

export default Article

const Xicon = styled.button`
    display:${props => props.showxicon};
`;

