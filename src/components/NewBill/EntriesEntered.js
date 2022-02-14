import React from 'react'
import Article from './Article';

const EntriesEntered = (props) => {
    const{
        articleList,
        handleSetArticleList,
        showxicon
    }=props;

    return (
        <div>
            {articleList.map(item => (
                <Article
                    key={articleList.indexOf(item)}
                    position={articleList.indexOf(item)}
                    article={item}
                    articleList={articleList}
                    handleSetArticleList={handleSetArticleList}
                    showxicon={showxicon}
                    />
                ))
            }
        </div>
    );
};

export default EntriesEntered;
