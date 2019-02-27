import * as React from 'react';
import classNames from 'classnames';
import {omit} from 'lodash';
import {CSSTransition} from 'react-transition-group';
import raf from 'raf';
import noop from '../_utils/noop';
import Icon from '../icon';

const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  } else {
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
  }
};

export interface ToTopProps {
  prefixCls?: string,
  className?: string,
  style?: React.CSSProperties;
  onClick?: ()=> void;
  children: React.ReactNode;
  displayHeight: number,
}

export default class ToTop extends React.PureComponent<ToTopProps>{

  static defaultProps = {
    prefixCls: 'Yep-to-top',
    style: {},
    displayHeight: 0,
  };

  constructor(props:ToTopProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const {displayHeight} = this.props;
    this.setState({
      visible: window.pageYOffset > displayHeight,
    });
  };

  scrollToTop = e => {
    const scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    const startTime = Date.now();
    const frameFunc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
      if (time < 450) {
        raf(frameFunc);
      } else {
        this.setScrollTop(0);
      }
    };
    raf(frameFunc);
    (this.props.onClick || noop)(e);
  };

  setScrollTop(value) {
    document.body.scrollTop = value;
    document.documentElement.scrollTop = value;
  }

  render() {
    const {prefixCls, className = '', children, style} = this.props;
    const cls = classNames(prefixCls, className);

    const defaultElement = (
      <div className={`${prefixCls}-content`}>
        <Icon type="lego_zhiding" size="md" />
      </div>
    );
    const divProps = omit(this.props, ['prefixCls', 'className', 'children', 'displayHeight', 'visible']);
    const visible = 'visible' in this.props ? this.props.visible : this.state.visible;
    return (
      <CSSTransition in={visible} timeout={300} classNames={'fade'} unmountOnExit>
        <div {...divProps} style={style} className={cls} onClick={this.scrollToTop}>
          {children || defaultElement}
        </div>
      </CSSTransition>
    );
  }
}