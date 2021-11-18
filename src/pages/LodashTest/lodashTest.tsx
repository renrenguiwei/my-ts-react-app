import * as React from "react";
import _ from 'lodash'

type Props = {
  
};
type State = {
  
};

export class LodashTest extends React.Component<Props, State> {
  
  debounceSubmit: Function
  
  constructor(props: any) {
    super(props);
    // this.debounceSubmit = _.debounce(() => 
    //   console.log('submit, submit')
    // , 500)
    this.debounceSubmit = _.debounce(() => 
      {
        return this.consoleTest()
      }
    ,500,
      {
        // leading: false, // 默认 '后防抖'
        // trailing: true
        // leading: true, // '前防抖'
        // trailing: false
        // leading: true, // '前后都执行'
        // trailing: true
        leading: false, // '不执行'
        trailing: false
      })
  }
  
  private consoleTest () {
    console.log('submit, submit')
  }
  
  // private submit() {
  //   this.debounceSubmit()
  // }
  
  private submit = () => {
    this.debounceSubmit()
  }
  
  
  
  render() {
    return (
      <div>
        {/*<button onClick={() => this.debounceSubmit()}>lodash debounce</button>*/}
        <button onClick={this.submit}>lodash debounce</button>
      </div>
    );
  };
};