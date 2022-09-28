import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import motivation from '../../../Assets/motivation.jpg'
import './Article.css'
import { useState } from 'react'

export const Article = props => {

    let { paragraph, image, title,noticeNumber } = props.article
    const [newTitle, setNewTitle] = useState(title);

    const getWordCount = () => {
        let stringCount = newTitle.length;
        let countLetter = 25;
        if (stringCount > countLetter) {
           let stringNumberCut =  countLetter - stringCount;
       
           let cutWord = title.slice(0, stringNumberCut);
           cutWord = cutWord + '...';
           setNewTitle(cutWord);       
        }
    }

    useEffect(() => {
        getWordCount();
    }, [])
    
 


    return (
        <li className='article-main-container'>
            <article className='article-container'>
                <div><h5 className='number'>{noticeNumber} </h5></div>
                <div>
                    <picture className='article-picture'><img className='article-img' src={image} alt={title} /></picture>
                </div>

                <div>
                    <span className='article-title'>{newTitle}
                    </span>
                    <p className='article-text'>{paragraph}</p>
                </div>
            </article>
        </li>
    )
}

Article.propTypes = {}
