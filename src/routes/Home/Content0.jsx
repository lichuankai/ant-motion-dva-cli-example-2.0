import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenEles = [
      (<Element key={0}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${0}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${0}`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock${0}`}
          //dangerouslySetInnerHTML={{
          //  __html: title,
          //}}
          />
          <h1
            key="contentOne"
            id={`${props.id}-contentBlock${0}`}
          >
            让数据说话      用心助力创新
          </h1>
          <h2
            key="contentTwo"
            id={`${props.id}-contentBlock${0}`}
          >
            100万+企业的共同选择
          </h2>
          <Button
            type="ghost"
            key="button"
            className="retrieval"
            id={`${props.id}-buttonBlock${0}`}
          >
            专利检索
          </Button>
        </QueueAnim></Element>),
      (<Element key={1}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${1}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${1}`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock${1}`}
          //dangerouslySetInnerHTML={{
          //  __html: title,
          //}}
          />
          <div className="content">
            <h1
              key="contentOne"
              id={`${props.id}-contentBlock${1}`}
            >
              知识产权一点通
          </h1>
            <h2
              key="contentTwo"
              id={`${props.id}-contentBlock${1}`}
            >
              随身携带的全球专利文献数据
          </h2>
            <div className="clearfax">
              <div className="div1"><img src="/downQRcode.png" /></div>
              <div className="div2">
                  <a className="apple" href="https://itunes.apple.com/cn/app/zhi-shi-chan-quan-yi-dian-tong/id892264333?mt=8 " target="_blank"><i className="icon-index-apple"></i>APP Store</a>
                  <a className="android" href="http://www.sdips.gov.cn/attachment/APP-Android.apk " target="_blank"><i></i>Android</a>
              </div>
            </div>
          </div>

        </QueueAnim></Element>),
      (<Element key={2}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${2}`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock${2}`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock${2}`}
          //dangerouslySetInnerHTML={{
          //  __html: title,
          //}}
          />
          <div className="content03">
            <h1
              className="title1"
              key="contentOne"
              id={`${props.id}-contentBlock${2}`}
            >
            微信订阅号 知识产权随身宝
          </h1>
            <h2
            className="title2"
              key="contentTwo"
              id={`${props.id}-contentBlock${2}`}
            >
            知识产权从未如此聚焦
          </h2>     
              <div className="weixin"><img src="/downQRcode.jpg" /></div>
          </div>

        </QueueAnim></Element>),
    ];
    // const childrenData = [
    //   {
    //     //title: '<img width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" />',
    //     contentOne: '让数据说话      用心助力创新',
    //     contentTwo: '100万+企业的共同选择',
    //     button: '专利检索',
    //   },
    //   {
    //     //title: '<img width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" />',
    //     content: '移动端应用下载入口',
    //     button: 'Learn More',
    //   },
    //   {
    //     //title: '<img width="100%" src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" />',
    //     content: '微信订阅号 知识产权随身宝',
    //     button: 'Learn More',
    //   }
    // ];
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              key="banner"
            >
              {childrenEles}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;