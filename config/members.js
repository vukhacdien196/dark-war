/**
 * Cấu hình danh sách thành viên liên minh Darkwar Survival
 * - Sửa uid để thêm/đổi ID thành viên
 * - Để uid: null nếu chưa có ID (slot trống - chỉ áp dụng cho leader)
 * - role: 'leader' | 'member'
 *   → leader : hiển thị avatar lên giao diện + nhập code
 *   → member : chỉ nhập code, không hiển thị avatar
 */
export const ALLIANCE_MEMBERS = [
    // ── Leaders (hiển thị avatar) ──────────────
    {
        uid: '1056105620000487',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1033829964000492',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1033540925000492',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1401076284000492',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1363791756000492',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1338934587000492', // <-- Trùng ở đây (Đã giữ lại bản ghi cũ này)
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1828877120000492',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1521843609000492',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1221564492000492',
        role: 'leader',
        note: 'R4',
    },
    {
        uid: '1337068224000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1671701641000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1740339406000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1239380806000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1255029651000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1453646175000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1388674851000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1186234702000492',
        role: 'member',
        note: 'R3'
    },
    {
        uid: '1441934726000492',
        role: 'member',
        note: 'R3'
    },
    // ── Các member mới được thêm vào ──────────────
    { uid: '1272830282000492', role: 'member', note: 'R3' },
    { uid: '1142668104000492', role: 'member', note: 'R3' },
    { uid: '1440500921000492', role: 'member', note: 'R3' },
    { uid: '1574034541000492', role: 'member', note: 'R3' },
    { uid: '1026310170000492', role: 'member', note: 'R3' },
    { uid: '1493050700000492', role: 'member', note: 'R3' },
    { uid: '1536921329000492', role: 'member', note: 'R3' },
    { uid: '1629278067000492', role: 'member', note: 'R3' },
    { uid: '1133710880000492', role: 'member', note: 'R3' },
    { uid: '1649806002000492', role: 'member', note: 'R3' },
    { uid: '1027534082000492', role: 'member', note: 'R3' },
    { uid: '1104091906000492', role: 'member', note: 'R3' },
    { uid: '1240909977000492', role: 'member', note: 'R3' },
    { uid: '1525513928000492', role: 'member', note: 'R3' },
    { uid: '1028664721000492', role: 'member', note: 'R3' },
    { uid: '1486216977000492', role: 'member', note: 'R3' },
    { uid: '1770841255000492', role: 'member', note: 'R3' },
    { uid: '1638887993000492', role: 'member', note: 'R3' },
    { uid: '1752637336000492', role: 'member', note: 'R3' },
    { uid: '1020736388000492', role: 'member', note: 'R3' },
    { uid: '1458755341000492', role: 'member', note: 'R3' },
    { uid: '1648521133000492', role: 'member', note: 'R3' },
    { uid: '1739860780000492', role: 'member', note: 'R3' },
    { uid: '1774197620000492', role: 'member', note: 'R3' },
    { uid: '1794719796000492', role: 'member', note: 'R3' },
    { uid: '1605442045000492', role: 'member', note: 'R3' },
    { uid: '1535993528000492', role: 'member', note: 'R3' },
    { uid: '1512810332000487', role: 'member', note: 'R3' },
    { uid: '1224048754000487', role: 'member', note: 'R3' },
]

/** Leaders — hiển thị trên giao diện */
export const LEADER_MEMBERS = ALLIANCE_MEMBERS.filter(m => m.role === 'leader')

/** Tất cả UID hợp lệ để nhập code (cả leader + member) */
export const ACTIVE_UIDS = ALLIANCE_MEMBERS
    .filter(m => m.uid)
    .map(m => m.uid)
