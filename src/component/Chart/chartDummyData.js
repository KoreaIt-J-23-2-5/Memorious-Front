import dayjs from "dayjs";
import ChartTableFirstRowInput from "../ChartDetail/ChartFirstRowInput";
import ChartDetailAddBtn from "../ChartDetail/ChartDetailAddBtn";
import ChartDetailEditBtn from "../ChartDetail/ChartDetailEditBtn";

/* eslint-disable no-unused-vars */
export const chartProfileDummyDataObj = [
    { profileImgSrc: "", profileName: "유정" },
    { profileImgSrc: "", profileName: "정어리" },
    { profileImgSrc: "", profileName: "고등어" },
    { profileImgSrc: "", profileName: "꽁치" },
];

export const chartPeriodArray = ["1달", "3달", "6달"];

export const tableColumns = [
    {
        key: 1,
        width: 100,
        title: "날짜",
        dataIndex: "date",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="date" />;
            }
            return dayjs(t).format("YYYY-MM-DD");
        },
    },
    {
        key: 2,
        width: 100,
        title: "수정",
        dataIndex: "buttons",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            return i === 0 ? <ChartDetailAddBtn /> : <ChartDetailEditBtn t={t} record={r} />;
        },
    },
    {
        key: 3,
        width: 100,
        title: "공복혈당",
        dataIndex: "fbs",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="fbs" />;
            }
            return t.toLocaleString("ko-KR");
        },
    },
    {
        key: 4,
        width: 100,
        title: "걸음수",
        dataIndex: "step",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="step" />;
            }
            return t.toLocaleString("ko-KR");
        },
    },
    {
        key: 5,
        width: 100,
        title: "맥박",
        dataIndex: "pulse",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="pulse" />;
            }
            return t.toLocaleString("ko-KR");
        },
    },
];
