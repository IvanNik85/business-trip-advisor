import React from 'react'
import Modal from '../../../../UI/Modal/Modal'
import ModalTextArea from '../../../../UI/Modal/ModalTextArea/ModalTextArea'
import ModalHeader from '../../../../UI/Modal/ModalHeader/ModalHeader'
import FeedbackMain from '../FeedbackMain/FeedbackMain'
import FeedbackCardFooter from '../FeedbackCardFooter/FeedbackCardFooter'
import Icon from '../../../../UI/Icon/Icon'
import CommentDate from '../../../../UI/CommentDate/CommentDate'
import FooterLeft from '../FooterComponents/FooterLeft'
import Bar from '../../../Bar/Bar'
import '../ReadMoreModal/ReadMoreModal.scss'

class FooterRight extends React.Component {
    state = {
        modalShow: false
    }
    modalOpenHandler = () => {
        this.setState({ modalShow: true });
    };
    modalClosedHandler = () => {
        this.setState({ modalShow: false });
    };
    render() {
        const { img, name, date, commentTitle, comment, filter, moreComments } = this.props.data
        let additionalComments = moreComments.map(item => (
            <FeedbackMain key={item.index} data={item}>
                <CommentDate date={'2017-05-12'} />
            </FeedbackMain>
          ));
        return (
            <div>
                <a href="##" id="readMore" onClick={this.modalOpenHandler}>
                    READ MORE
                </a>
                <Modal
                    style={{ "z-index": 50 }}
                    show={this.state.modalShow}
                    clicked={this.modalClosedHandler}
                >
                    <ModalTextArea>
                        <ModalHeader
                            clicked={this.modalClosedHandler}
                            closeSpanClicked={this.modalClosedHandler}
                            title={"City life feedback"}
                        />
                        <FeedbackMain data={this.props.data}>
                            <Bar score="5.7" />
                        </FeedbackMain>
                        <FeedbackCardFooter>
                            <CommentDate date={date} />
                            <Icon fontSize={25} iconClass={filter} color={'color1'} />
                        </FeedbackCardFooter>
                        <div className="comments">
                            <h3>Comments</h3>
                            <FooterLeft numComments = {moreComments.length}/>
                        </div>
                        {/* <FeedbackMain data={this.props.data}>
                            <CommentDate date={'2017-05-12'} />
                        </FeedbackMain> */}
                        {additionalComments}
                    </ModalTextArea>

                </Modal>
                
            </div>
        )
    }
}

export default FooterRight