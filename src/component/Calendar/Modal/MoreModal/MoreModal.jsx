import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { SModalScheduleBox, SModalScheduleText, STimeText } from "../../../../pages/Calendar/style";
import { scheduleRecoil } from "../../../../store/atoms/calendarAtoms";
import convertToAmPmFormat from "../../../../utils/Calendar/convertToAmPmFormat";
import AddEditModal from "../AddEditModal/AddEditModal";
import Badge from "../Badge/Badge";
import { SModal } from "./style";
/** @jsxImportSource @emotion/react */

function MoreModal({ open, setOpen, dateObject, schedules, position }) {
    const month = dateObject.get("month");
    const date = dateObject.get("date");
    const title = `${month + 1}월 ${date}일 `;

    // eslint-disable-next-line no-unused-vars
    const [selectedSchedule, setSelectedSchedule] = useRecoilState(scheduleRecoil);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleContainerClick = (e, schedule) => {
        setSelectedSchedule(schedule);
        setEditModalOpen(true);
    };

    const renderSchedule = schedule => {
        if (schedule?.date) {
            return null;
        }

        return (
            <>
                <div onClick={e => handleContainerClick(e, schedule)} css={SModalScheduleBox(schedule?.dayDiff, schedule?.isAllDay, schedule?.labelColor)} key={`${schedule?.scheduleId}-${schedule?.weekIndex}-${schedule?.uqKey}-6`}>
                    {schedule?.isAllDay ? null : (
                        <React.Fragment key={`${schedule?.scheduleId}-${schedule?.weekIndex}-${schedule?.uqKey}-8`}>
                            {schedule?.dayDiff === 0 && <Badge color={schedule?.labelColor} />}
                            <span css={STimeText}>{convertToAmPmFormat(schedule?.startTime)}</span>
                        </React.Fragment>
                    )}
                    <li className={schedule?.scheduleId} css={SModalScheduleText} key={`${schedule?.scheduleId}-${schedule?.weekIndex}-${schedule?.uqKey}-7`}>
                        {schedule?.title}
                    </li>
                </div>
            </>
        );
    };

    return (
        <div>
            <SModal title={title} open={open} onOk={handleOk} onCancel={handleCancel} footer={null} width={300} style={{ top: position.top - 260, left: position.left - 900 }}>
                <div>{schedules && schedules?.map(schedule => renderSchedule(schedule))}</div>
            </SModal>
            <AddEditModal open={editModalOpen} setOpen={setEditModalOpen} editData={selectedSchedule} />
        </div>
    );
}

export default MoreModal;
