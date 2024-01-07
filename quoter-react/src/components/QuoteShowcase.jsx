import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import './QuoteShowcase.css';
import React from 'react';

class QuoteShowcase extends React.Component {
    constructor(props) {
        super(props);
        this.showcaseBG = React.createRef();
    }

    componentDidUpdate() {
        this.showcaseBG.current.addEventListener('load', this.setBgGradient())
    }

    setBgGradient = () => {
        this.showcaseBG.current.style.backgroundImage = this.generateGradient();
    }

    makeRandom() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let a = Math.random().toFixed(1);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    generateGradient = () => {

        // get number of gradients
        let gradientCount = Math.floor(Math.random() * 5 + 1);
        
        // loop and build linear gradient
        let gradientPropertyArray = [];
        for(let i = 0; i < gradientCount; i++) {
            let degree = `${Math.floor(Math.random() * 360)}deg`
            let colorStartPercent1 = `${(Math.random() * 100).toFixed(1)}%`
            let colorStartPercent2 = `${(Math.random() * 100).toFixed(1)}%`
    
            let color1 = this.makeRandom();
            let color2 = this.makeRandom();
    
    
            gradientPropertyArray.push(`linear-gradient(${degree}, ${color1} ${colorStartPercent1}, ${color2} ${colorStartPercent2}) `) 
        }
    
        return `${gradientPropertyArray.join(', ')}`
    }

    renderBuild() {
        
        // console.log(this.props.quote);
        if(this.props.quote === undefined || this.props.quote.length === 0) {
            return <div className='showcase__error' ref={this.showcaseBG}>No quotes found, please try a new search!</div>;
        }



        // console.log(this.props)
        return (
            <div className="showcase" ref={this.showcaseBG}>
                <div className='showcase__quote--content'>
                    <p className='showcase__description'>
                        <span className='showcase__icons showcase__icons--start'><RiDoubleQuotesL /></span>
                        
                        {this.props.quote.content}
                        
                        <span className='showcase__icons showcase__icons--end'><RiDoubleQuotesR /></span>
                    </p>
                    <p className="showcase__author">{this.props.quote.author}</p>
                </div>
                    
            </div>
        )
    }
    

    render() {
        return this.renderBuild();
    }
}

export default QuoteShowcase;