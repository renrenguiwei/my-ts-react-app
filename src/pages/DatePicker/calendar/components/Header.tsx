import * as React from "react";

import './Header.less'
import close from '../asserts/img/close.png'

type Props = {
  title: string
  handleClose: () => void
}
type State = {}

export class Header extends React.Component<Props, State> {
  render() {
    const { title } = this.props
    return (
      <div className="cacH">
        <div className="cacH-close">
          <img src={close} alt="关闭" />
        </div>
        <div className="cacH-title">{title}</div>
      </div>
    );
  }
}