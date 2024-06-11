import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import styles from '../css/Footer.module.css';
import { ReactComponent as FacebookIcon } from '../svg/FacebookIcon.svg';
import { ReactComponent as TwitterIcon } from '../svg/TwitterIcon.svg';
import { ReactComponent as InstagramIcon } from '../svg/InstagramIcon.svg';

Modal.setAppElement('#root');

export default function Footer() {
    const location = useLocation();
    const isReviewPage = location.pathname.includes('review');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const termsOfUseContent = `
        <h3>서비스 이용 약관</h3>
        <p>본 서비스 이용 약관(이하 "약관")은 사용자가 본 웹사이트(이하 "사이트")를 이용함에 있어 회사와 사용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. 본 약관은 사용자가 사이트에 접속하거나 이용하는 경우 적용됩니다.</p>
        <h4>1. 서비스의 제공</h4>
        <p>회사는 사용자에게 사이트 및 관련 서비스를 제공합니다. 회사는 서비스의 변경, 중단, 종료 등을 할 수 있으며, 이에 대해 사전 공지합니다.</p>
        <h4>2. 사용자의 의무</h4>
        <p>사용자는 본 약관 및 관련 법령을 준수해야 하며, 타인의 권리를 침해하거나 불법적인 활동을 하지 않아야 합니다.</p>
        <h4>3. 개인정보 보호</h4>
        <p>회사는 사용자의 개인정보를 보호하기 위해 최선을 다하며, 개인정보 처리 방침에 따라 개인정보를 수집, 이용, 보호합니다.</p>
        <h4>4. 책임 제한</h4>
        <p>회사는 서비스 이용과 관련하여 발생한 손해에 대해 책임을 지지 않습니다. 다만, 회사의 고의 또는 중대한 과실로 인한 손해는 예외로 합니다.</p>
        <h4>5. 기타</h4>
        <p>본 약관의 해석 및 적용은 대한민국 법령에 따르며, 분쟁이 발생할 경우 관할 법원에서 해결합니다.</p>
    `;

    const termsContent = `
        <h3>약관 사항</h3>
        <p>본 약관 사항은 사용자가 본 웹사이트를 이용함에 있어 회사와 사용자 간의 법적 관계를 명확히 하기 위한 규정입니다.</p>
        <h4>1. 약관의 변경</h4>
        <p>회사는 필요 시 약관을 변경할 수 있으며, 변경된 약관은 사이트에 게시됩니다. 사용자는 변경된 약관을 숙지하고 준수해야 합니다.</p>
        <h4>2. 이용 계약의 성립</h4>
        <p>사용자가 본 약관에 동의하고, 회사가 이를 승인함으로써 이용 계약이 성립됩니다.</p>
        <h4>3. 서비스 이용</h4>
        <p>사용자는 본 약관에 따라 사이트를 이용할 수 있으며, 회사는 사용자의 서비스 이용을 위해 최선을 다합니다.</p>
        <h4>4. 계약 해지</h4>
        <p>사용자가 본 약관을 위반할 경우, 회사는 이용 계약을 해지할 수 있습니다.</p>
        <h4>5. 손해배상</h4>
        <p>회사는 사용자가 본 약관을 위반하여 발생한 손해에 대해 책임을 지지 않습니다. 다만, 회사의 고의 또는 중대한 과실로 인한 손해는 예외로 합니다.</p>
    `;

    const cookiePolicyContent = `
        <h3>쿠키 관련 약관</h3>
        <p>본 쿠키 관련 약관은 사용자가 사이트를 이용함에 있어 쿠키의 사용 목적, 종류, 관리 방법 등에 대해 설명합니다.</p>
        <h4>1. 쿠키의 사용 목적</h4>
        <p>회사는 사용자의 편리한 사이트 이용을 위해 쿠키를 사용합니다. 쿠키는 사용자의 사이트 방문 기록을 저장하여 맞춤형 서비스를 제공합니다.</p>
        <h4>2. 쿠키의 종류</h4>
        <p>회사는 세션 쿠키와 영구 쿠키를 사용합니다. 세션 쿠키는 브라우저 종료 시 자동 삭제되며, 영구 쿠키는 사용자가 삭제할 때까지 저장됩니다.</p>
        <h4>3. 쿠키 관리 방법</h4>
        <p>사용자는 브라우저 설정을 통해 쿠키 사용을 거부하거나 삭제할 수 있습니다. 다만, 쿠키 사용을 거부할 경우 사이트 이용에 제한이 있을 수 있습니다.</p>
        <h4>4. 쿠키 설정 변경 방법</h4>
        <p>브라우저의 설정 메뉴에서 쿠키 설정을 변경할 수 있습니다. 구체적인 방법은 브라우저 도움말을 참조하시기 바랍니다.</p>
        <h4>5. 쿠키 사용 동의 철회</h4>
        <p>사용자는 언제든지 쿠키 사용 동의를 철회할 수 있으며, 이는 브라우저 설정을 통해 가능합니다.</p>
    `;

    return (
        <div className={`${styles.container} ${isReviewPage ? styles.ReviewPagecontainer : ''}`}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p className={`${styles.text}`}>개인정보 처리 방침</p>
                    <p className={`${styles.text}`}>고객센터</p>
                    <p className={`${styles.text}`}>협업 문의</p>
                    <p className={`${styles.text}`}>주소 : 경기 안양시 동안구 임곡로 29 대림대학 </p>
                </div>
                <div className={`${styles.column} ${styles.snsColumn}`}>
                    <p className={`${styles.text} ${styles.textLarge}`}>SNS</p>
                    <div className={styles.iconContainer}>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.svgContainer}
                        >
                            <FacebookIcon className={styles.svgIcon} />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.svgContainer}
                        >
                            <TwitterIcon className={styles.svgIcon} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.svgContainer}
                        >
                            <InstagramIcon className={styles.svgIcon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.ftContainer}>
                <div className={styles.dividerLine}></div>
                <div className={styles.content}>
                    <p className={styles.footerText}>@2024 Damoa, All Rights Reserved</p>
                    <div className={styles.linkContainer}>
                        <p className={styles.footerText} onClick={() => openModal('이용 약관', termsOfUseContent)}>
                            이용 약관
                        </p>
                        <div className={styles.verticalLine}></div>
                        <p className={styles.footerText} onClick={() => openModal('약관 사항', termsContent)}>
                            약관 사항
                        </p>
                        <div className={styles.verticalLine}></div>
                        <p
                            className={styles.footerText}
                            onClick={() => openModal('쿠키 관련 약관', cookiePolicyContent)}
                        >
                            쿠키 관련 약관
                        </p>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
            >
                <div className={styles.modalContent}>
                    <h2>{modalContent.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: modalContent.content }}></div>
                    <button onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    );
}
