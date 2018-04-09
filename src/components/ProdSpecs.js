import React, { Component } from "react";
import { db } from "../fb";
import { find } from "lodash";

import Radio, { RadioGroup } from "material-ui/Radio";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import ListSubheader from "material-ui/List/ListSubheader";
import Select from "material-ui/Select";

class ProdSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      engineSpecs: "",
      engine: "",
      liftType: "",
      heights: "",
      height: ""
    };
    this.handleChangeEngine = this.handleChangeEngine.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
  }

  handleChangeEngine(e) {
    this.setState({
      engine: e.target.value,
      engineSpecs: this.state.model.engines[e.target.value]
    });
  }

  handleChangeHeight(e) {
    if (e.target.name === "liftType") {
      this.state.model.heights.map((options, index) => {
        if (options.name === e.target.value) {
          this.setState({ heights: options.options });
        }
      });
    }
    this.setState({ [e.target.name]: e.target.value });
  }

  static getDerivedStateFromProps(nextProps) {
    let filterModels = (data, param) => {
      if (!param) {
        return data[0];
      } else {
        return data.find(model => model.model === param);
      }
    };
    let model = filterModels(nextProps.data, nextProps.match.params.model);
    return {
      model: model,
      fullSpecs: model.specs,
      engineSpecs: model.engines.deutz,
      engine: Object.keys(model.engines)[0],
      liftType: model.heights[0].name,
      heights: model.heights[0].options,
      height:
        model.heights[0].name + model.heights[0].options[0].liftHeight.value
    };
  }

  render() {
    console.log(this.state.fullSpecs);
    console.log(this.state.heights);
    console.log(find);
    let capFirst = string => string.charAt(0).toUpperCase() + string.slice(1);
    let model = this.state.model;
    let driveSpecValues = this.state.engineSpecs.concat(model.specs[5].values);
    let engineOptions = Object.keys(this.state.model.engines);
    const formStyle = {
      width: "100%",
      maxWidth: "15rem"
    };
    return (
      <div className="bg-white px-5 py-5 b-sh">
        <h3 className="mb-4">{`${capFirst(
          model.type
        )} ${model.model.toUpperCase()}`}</h3>

        <div className="row">
          <div className="col">
            {engineOptions.length > 1 ? (
              <FormControl component="fieldset">
                <FormLabel component="legend">Выберите двигатель:</FormLabel>
                <RadioGroup
                  aria-label="engine"
                  name="engine"
                  value={this.state.engine}
                  onChange={this.handleChangeEngine}
                >
                  {engineOptions.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={this.state.model.engines[option][0].value}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ) : (
              ""
            )}
          </div>
          <div className="col">
            <FormControl component="fieldset">
              <FormLabel component="legend">Тип мачты:</FormLabel>
              <RadioGroup
                aria-label="lift type"
                name="liftType"
                value={this.state.liftType}
                onChange={this.handleChangeHeight}
              >
                {model.heights.map((liftType, index) => (
                  <FormControlLabel
                    key={liftType.name}
                    value={liftType.name}
                    control={<Radio />}
                    label={capFirst(liftType.name)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="col">
            <FormControl style={formStyle}>
              <InputLabel
                style={{
                  fontSize: "1rem",
                  transform: "scale(1)",
                  marginBottom: ".5rem"
                }}
                shrink
                htmlFor="pickHeight"
              >
                Высота подъема:
              </InputLabel>
              <Select
                value={this.state.height}
                onChange={this.handleChangeHeight}
                style={{ marginTop: "1.5rem" }}
                input={<Input name="height" id="pickHeight" />}
              >
                {this.state.heights.map((height, index) => (
                  <MenuItem
                    key={height.liftHeight.value}
                    value={this.state.liftType + height.liftHeight.value}
                  >
                    {height.liftHeight.value + " " + height.liftHeight.unit}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row">
          {model.specs.map(spec => {
            let devider =
              spec.orderNum % 3 === 0 ? <div className="w-100" /> : "";

            if (spec.orderNum === 6) {
              return (
                <React.Fragment key={spec.orderNum}>
                  <div className="col-md">
                    <p className="h5 my-3">{capFirst(spec.group)}</p>
                    {driveSpecValues.map((value, index) => (
                      <div key={index} className="pl-2 my-2">
                        <p className="h6">{value.name}</p>
                        <p className="simple-txt pl-2 m-0">{`${value.value} ${
                          value.unit ? value.unit : ""
                        }`}</p>
                      </div>
                    ))}
                  </div>
                  {devider}
                </React.Fragment>
              );
            }

            return (
              <React.Fragment key={spec.orderNum}>
                <div className="col-md">
                  <p className="h5 my-3">{capFirst(spec.group)}</p>
                  {spec.values.map((value, index) => (
                    <div key={index} className="pl-2 my-2">
                      <p className="h6">{value.name}</p>
                      <p className="simple-txt pl-2 m-0">{`${value.value} ${
                        value.unit ? value.unit : ""
                      }`}</p>
                    </div>
                  ))}
                </div>
                {devider}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProdSpecs;
