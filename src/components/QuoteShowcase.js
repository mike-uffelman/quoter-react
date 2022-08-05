import './QuoteShowcase.css';
import React from 'react';

class QuoteShowcase extends React.Component {
    constructor(props) {
        super(props);
        this.showcaseBG = React.createRef();
    }

    componentDidUpdate() {
        console.log(this.showcaseBG.current);
        this.showcaseBG.current?.addEventListener('load', this.setBg)
        // this.showcaseBG.current.style.backgroundImage = this.generateGradient();
    }

    setBg = () => {
        console.log('setting background...')
        this.showcaseBG.current.backgroundImage = this.generateGradient();
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
        // console.log('number of gradients: ', gradientCount)
        // get degrees for gradient
        
        // loop and build linear gradient
        let gradientPropertyArray = [];
        for(let i = 0; i < gradientCount; i++) {
            let degree = `${Math.floor(Math.random() * 360)}deg`
            let colorStartPercent1 = `${(Math.random() * 100).toFixed(1)}%`
            let colorStartPercent2 = `${(Math.random() * 100).toFixed(1)}%`
    
            // get rgba
            let color1 = this.makeRandom();
            let color2 = this.makeRandom();
    
    
            gradientPropertyArray.push(`linear-gradient(${degree}, ${color1} ${colorStartPercent1}, ${color2} ${colorStartPercent2}) `) 
        }
    
        // console.log(`${gradientPropertyArray.join(', ')}`);
        return `${gradientPropertyArray.join(', ')}`
    }

    render() {
        // console.log();
        // return <div ref={this.showcaseBG}>Quote goes here</div>
        // console.log('QuoteShowcase prop: ', quote.author)
        // console.log(props);
        // const {abc} = this.props.showcaseBG;
        if(this.props.quote === undefined || this.props.quote.length === 0) {
            return <div></div>;
        }
        console.log(this.props)
        return (
            <div className="showcase" ref={this.showcaseBG}>
                    <p className='showcase__description'>{this.props.quote.content}</p>
                    <p className="showcase__author">{this.props.quote.author}</p>
            </div>
        )
    }
}



// generateBackgrounds = () => {
//     const bgDivs = document.querySelectorAll('.bg');
//     setInterval(() => {
//         // if bg is not active, get a new gradient and assign to it
//             bgDivs.forEach(bg => {
//                 if(!bg.classList.contains('active')) {
//                     bg.style.backgroundImage = this.generateGradient();
//                     bg.classList.add('active');
//                     bg.style.animationName = 'showBg';
//                     bg.style.opacity = 1;
//                 } else {
//                     bg.style.animationName = 'hideBg';
//                     bg.classList.remove('active')
//                     bg.style.opacity = 0;
    
//                 }
//             })
//         }, 10000)
// }



export default QuoteShowcase;