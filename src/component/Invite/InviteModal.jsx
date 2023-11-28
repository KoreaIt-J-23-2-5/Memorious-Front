import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { instance } from "../../config";
import { emailOptions } from "../../constants/emailOptions";
import InviteResultModal from "./InviteResultModal";
import { SContentsBox, SModal } from "./style";
/** @jsxImportSource @emotion/react */

function InviteModal({ open, setOpen }) {
    const defaultEmail = {
        local: "",
        domain: "",
        domainSelectBox: emailOptions[0].value,
    };
    const [emailInput, setEmailInput] = useState(defaultEmail);
    const [resultModalOpen, setResultModalOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const customDomainSelect = emailOptions[emailOptions.length - 1].value;
    const email = `${emailInput.local}@${emailInput.domainSelectBox === customDomainSelect ? emailInput.domain : emailInput.domainSelectBox}`;
    // <<< 모달창 관련 >>>
    const handleOk = async () => {
        try {
            setLoading(true);
            const response = await instance.post("api/invitation/mail", { email });
            setIsSuccess(response.data);
        } catch (error) {
            setIsSuccess(false);
        } finally {
            setLoading(false);
            setOpen(false);
            setResultModalOpen(true);
        }
    };

    // <<<모달 종료시>>>
    const handleCancel = () => {
        setOpen(false);
        setEmailInput(defaultEmail);
    };

    // <<< Input local Part관련 >>>
    const onLocalChange = e => {
        setEmailInput({
            ...emailInput,
            local: e.target.value,
        });
    };

    // << Domain 입력 부분 >>>
    const onDomainChange = e => {
        setEmailInput({
            ...emailInput,
            domain: e.target.value,
        });
    };

    // <<< Domain Select 부분 >>>
    const onDomainSelectBoxChange = value => {
        setEmailInput({
            ...emailInput,
            domainSelectBox: value,
        });
    };

    return (
        <>
            <SModal
                centered
                title="초대하기"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel} size="large">
                        취소
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk} size="large">
                        초대
                    </Button>,
                ]}
                width={600}
            >
                <div css={SContentsBox}>
                    {!loading ? <p>초대하실 가족의 이메일을 입력해주세요.</p> : <p> 초대중 ... 잠시만 기다려주세요.</p>}
                    <div className="emailInputBox">
                        <Input name="local" onChange={onLocalChange} value={emailInput.local} onPressEnter={handleOk} style={{ width: "30%" }} />
                        <span>@</span>
                        <Input name="domain" onChange={onDomainChange} value={emailInput.domainSelectBox === customDomainSelect ? emailInput.domain : emailInput.domainSelectBox} style={{ width: "27%" }} />
                        <Select name="domainSelectBox" options={emailOptions} onChange={onDomainSelectBoxChange} value={emailInput.domainSelectBox} style={{ width: "28%" }} />
                    </div>
                </div>
            </SModal>
            <InviteResultModal open={resultModalOpen} setOpen={setResultModalOpen} email={email} isSuccess={isSuccess} />
        </>
    );
}
export default InviteModal;
