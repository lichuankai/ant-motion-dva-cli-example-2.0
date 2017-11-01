import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
//import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs } from 'antd';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

const TabPane = Tabs.TabPane;

class Content extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'content6',
  };

  state = {
    show: 0,
  };

  onChange = (key) => {
    this.setState({ show: parseInt(key) })
  }

  
    

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={item.img} height="100%" /></span>
        <p>{item.content}</p>
      </div>
    </li>);
  }
    getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };
    //师资平台
    getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    
    delete props.isMode;

     const dataSource = [
      { icon: 'http://training.ciptc.org.cn/timages/nindex_xq.png', title: '需求信息', content: '' },
      { icon: '/222.png', title: '讲师信息', content: '' },
      { icon: '/333.png', title: '课程体系', content: '' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);

    const dataArray = [
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/966', content: '电子信息行业专利信息分析案例解析' },
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/906', content: '行业知识产权信息分析（1）' },
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/905', content: '行业知识产权信息分析（2）' },
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/960', content: '发明和实用新型申请文件的撰写' },
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/912', content: '无效宣告请求书与意见陈述撰写' },
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/274', content: '专利代理实务' },
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/834', content: '专利文献检索运用实例' },
      { img: 'http://shandong.ciptc.org.cn/public/site/classcourse/image/42', content: '专利文献基础知识' },
    
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    const text=`<h3>简介</h3>
          <p>中国知识产权远程教育平台创建于2002年，是由国家知识产权局主办的专业的知识产权在线教育平台，平台为企业、高校、研究机构及政府机关等各行各业的学员提供公益性培训。   </p>     
           
            <h3>规模</h3>
             
          <p>平台由学习平台、教学辅导平台、数据统计分析平台、师资信息平台、MOOC平台及移动平台等子系统组成，平台设计体现了在线教育最新的发展理念，平台功能强大实用，用户操作简单。    </p>    
            
            <h3>开放</h3>
            
          <p>平台汇聚了一大批国内外知识产权知名专家和专业人士担任课程主讲老师，主讲老师授课水平高。平台建立了完整、科学的知识产权课程体系，课程资源涵盖了不同的领域和层次，在满足学员
          系统学习基础知识的前提下，还为学员提供专题培训项目，具有很强的针对性和实用性。
            </p>`;
   const img= <img width="100%" src="/platform.PNG" />

    const tabsss=[    
   <TabPane
        key={0}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${0}`}
        >
          <i><img src= 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' width="100%" /></i>
          平台介绍
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          leave={null}
          component=""
        >
          {this.state.show === 0 && (
            <div key="content">
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${0}`}
              >
              {img} 
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${0}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
              
             </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>,
      <TabPane
        key={1}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${1}`}
        >
         <i><img src= 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' width="100%" /></i>
          课程介绍
        </span>)}
      >

       <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>

      </TabPane>,
      <TabPane
        key={2}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${2}`}
        >
         <i><img src= 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' width="100%" /></i>
         师资平台
        </span>)}
      >
<div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            知识产权需求发布，讲师搜索的首选平台
            <br />
            <div
            className="div22"
            >
            <Button
            type="ghost"
            key="button1"
            className="retrieval"            
          >
            发布需求
          </Button>
          <Button
            type="ghost"
            key="button2"
            className="retrieval"
          >
            找需求
          </Button>
          </div>
         
          </TweenOne>
          
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >

          
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>



      </TabPane>,


    ]


    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            远程教育
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            为企业、高校、研究机构及政府机关等各行各业的学员提供公益性培训
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
              {tabsss}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}

export default Content;
