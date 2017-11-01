import React, {Component} from 'react';
import {connect} from 'react-redux';

class  Details extends Component{
    render(){
        if (!this.props.recipe){
            return(
                <div className="first-page">
                <h1 className="first-page-heading">кухня</h1>
                    <p className="first-page-p">Вкусная еда – это о любви, эмоциях,
                        удовольствии и энергии.
                        Нежность сыра бри, жгучая острота красного перца, сладость сливочного масла, легкая приторность ванили, насыщенность черного шоколада, приятная свежесть мяты, аромат лимонной цедры,
                        мягкость тающего во рту бисквита,
                        пряность корицы – это детали.</p>
                    <p className="first-page-p">Детали – это то, что восхищает и запоминается. Вы можете просто нарезать капусту, заправить ее маслом, добавить соль и перец по вкусу. А можете украсить вкус блюда деталями: выбрать ароматное домашнее масло, добавить зерна тмина, выдавить лимонный сок.
                        Каждая из этих деталей будет проявляться постепенно, одна за другой, как отдельные звуки, которые, объединившись, выливаются в симфонию, яркую и пронзительную. Благодаря деталям вкус привычного блюда начинает «звучать» по-новому. </p>
                    <p className="first-page-p">Детали и щепотка любви делает еду по истине вкусной.
                        Поэтому старайтесь и готовьте с любовью. Приятного аппетита!</p>
                    <img src="https://www.sunriseseniorliving.com/~/media/blog-images/may-2016/if-youre-still-looking-for-something-special-to-do-check-out-some-of-these-activities-that-ensure-your-dad-will-have-a-happy-fathers-day_379_40127375_0_14007862_728.jpg" alt="food"/>
                </div>);
        }
        return(
            <div className="wrapper-details">
                <div className="details-text">
                    <h2 className="details-heading">{this.props.recipe.name}</h2>
                    <p><b>Ингридиенты:</b><br /> {this.props.recipe.ingredients}</p>
                    <div className="wrapper-img-little">
                        <img className="img-little" src={this.props.recipe.img} />
                    </div>
                    <p><b>Способ приготовления</b><br />{this.props.recipe.description}</p>
                </div>
                <div className="details-img">
                    <img className="img-big" src={this.props.recipe.img} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        recipe: state.activeR
    };
}
export default connect(mapStateToProps)(Details);
