import React, {useState} from 'react';
import NewEntry from './NewEntry';
import EntriesEntered from './EntriesEntered';


const Entries = (props) => {
    const {
        articleList,
        handleSetArticleList,
    }=props;

    const [entryCounter, setEntryCounter] = useState(1);

    return (
        <div>
           <EntriesEntered 
                articleList={articleList}
                handleSetArticleList={handleSetArticleList}
                showxicon={"block"}
           />
           <NewEntry
                articleList={articleList}
                handleSetArticleList={handleSetArticleList}
                entryCounter={entryCounter}
                handleSetEntryCounter={(value)=>setEntryCounter(value)}
           />
        </div>
    );
};

export default Entries;
