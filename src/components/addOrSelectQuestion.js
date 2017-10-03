import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

class AddOrSelectQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null,
      options: [this.props.questions]
    };
  }

  render() {
    console.log(this.state.options)
    const onChange = (selections) => {
      console.log("Change Handler 1 : Selected: ", selections);

      const newOptions = [].concat(this.state.options);

      selections.forEach(selection => {
        const match = this.state.options.find(
          entry => (entry.value == selection.label));
        if (!match) {
        	newOptions.add(match);
        }
      });

      this.setState({
        val: [].concat(selections),
        options: newOptions
      });
    };

    return (<div>
      <Select.Creatable name = "form-field-name"
            value = {this.state.val}
            options = {this.state.options}
            onChange = {onChange}
            />
    </div>);
  }
}

export default AddOrSelectQuestion;
