import * as React from "react";
import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import Calendar from "@/pages/DatePicker/calendar";

type Props = {}
type State = {}

@observer
export default class App extends React.Component<Props, State> {

  public visible: boolean = true
  constructor(props: any) {
    super(props);
    makeObservable(this, {
      visible: observable
    })
  }

  render() {
    return <Calendar />
  }
}
