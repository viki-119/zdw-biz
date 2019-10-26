import { string, bool } from 'prop-types';
import React from 'react';
import './block.less';

export default function Block(props) {
  const { title } = props;
  const { subTitle } = props;
  const { withLine } = props;
  const extra = props.extra || '';
  const className = props.className || '';

  return (
    <div className={`zdw_block ${className}`}>
      <div className="zdw_block_title">
        <div className="zdw_block_title_icon" />
        <span className="zdw_block_title_text">
          {title}
        </span>
        {
          subTitle && <span className="zdw_block_subtitle_text">{subTitle}</span>
        }
        {
          withLine && <div className="zdw_block_title_line" />
        }
        {
          extra && <div className="zdw_block_title_extra">{extra}</div>
        }
      </div>
      {
        props.children
        && (
          <div className="zdw_block_wrapper">
            {props.children}
          </div>
        )
      }
    </div>
  );
}

Block.propTypes = {
  title: string.isRequired,
  subTitle: string,
  withLine: bool,
  className: string,
};

Block.defaultProps = {
  title: '',
  subTitle: '',
  withLine: false,
  extra: null,
  className: ''
};
