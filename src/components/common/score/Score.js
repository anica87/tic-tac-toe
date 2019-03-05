import React from 'react';

const baseClass = 'ttt-score';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      text: props.label,
      isEditing: false,
    });
  }

  onTextChanged = (e) => {
    this.setState({ text: e.currentTarget.value });
  };

  onClickEdit = () => {
    const { isEditing, text } = this.state;
    const { player } = this.props;
    if (isEditing) {
      player(text);
    }
    this.setState({ isEditing: !isEditing });
  };

  render() {
    const { value } = this.props;
    const { isEditing, text } = this.state;
    const cls = value === 1 ? `${baseClass}--winner` : baseClass;
    return (
      <div>
        <dl className={cls}>
          <dt className={`${baseClass}__label`}>
            {isEditing ? '' : <span>{text}</span>}
            {isEditing && text !== 'Draw'
              ? <span><input value={text} type="text" maxLength="20" onChange={this.onTextChanged} /></span> : ''}
            {text !== 'Draw' ? <button type="button" className={`${baseClass}--edit`} onClick={this.onClickEdit}>Edit</button> : '' }
          </dt>
          <dt className={`${baseClass}__value`}>
            {value}
          </dt>
        </dl>
      </div>
    );
  }
}

export default Score;
