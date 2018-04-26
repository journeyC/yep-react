import React, {PureComponent} from 'react'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonGroup from "./ButtonGroup";

export default class Button extends PureComponent {


  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    type:PropTypes.string,
  }

  static defaultProps = {
    prefixCls:'Yep-btn',
    disabled:false,
    type:'default',
  }

  render() {

    const {prefixCls,className,type,submit,disabled,onClick,icon,inline,children} = this.props
    const El = submit?'button' :'a';

    const cls = classNames(prefixCls,className,{
      'btn-primary':type === 'primary',
      'btn-disabled':disabled,
      'btn-ghost':type === 'ghost',
      'btn-default':type==='default',
      'btn-inline':!!inline,
    })
    return (
      <El
        className={cls}
        aria-disabled={disabled}
        onClick={disabled ? undefined : onClick}
      >
        {
          icon && 'icon'
        }
        {children}
      </El>
    )
  }
}

Button.ButtonGroup = ButtonGroup