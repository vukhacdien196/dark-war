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
        uid: '1197327362000516',
        role: 'leader',
        note: '',
    },
    {
        uid: '1681468324000516',
        role: 'leader',
        note: '',
    },
    {
        uid: '1017777901000516',
        role: 'leader',
        note: '',
    },
    {
        uid: '1409855050000516',
        role: 'leader',
        note: '',
    },
    {
        uid: '1334382818000516',
        role: 'leader',
        note: '',
    },
    {
        uid: '1484485116000516',
        role: 'leader',
        note: '',
    },
    {
        uid: '1163685269000516',           // ← Chưa có ID, để trống
        role: 'leader',
        note: 'TBD',
    },
    {
        uid: '1126810326000516',
        role: 'leader',
        note: '',
    },
    // ── Members (nhập code, không hiển thị) ───
    {
        uid: '1024270254000516',
        role: 'member',
        note: '',
    },
    {
        uid: '1126547016000516',
        role: 'member',
        note: '',
    },
    {
        uid: '1033829964000492',
        role: 'member',
        note: '',
    },
    {
        uid: '1567658928000516',
        role: 'member',
        note: '',
    },
    {
        uid: '1525507493000516',
        role: 'member',
        note: '',
    },{
        uid: '1171588137000516',
        role: 'member',
        note: '',
    },{
        uid: '1063144772000516',
        role: 'member',
        note: '',
    },{
        uid: '1060031870000516',
        role: 'member',
        note: '',
    },{
        uid: '1066263135000516',
        role: 'member',
        note: '',
    },{
        uid: '1614030264000516',
        role: 'member',
        note: '',
    },{
        uid: '1104165322000516',
        role: 'member',
        note: '',
    },{
        uid: '1371815522000516',
        role: 'member',
        note: '',
    },{
        uid: '1363122788000516',
        role: 'member',
        note: '',
    },{
        uid: '1637851594000516',
        role: 'member',
        note: '',
    },{
        uid: '1000794003000516',
        role: 'member',
        note: '',
    } 
]

/** Leaders — hiển thị trên giao diện */
export const LEADER_MEMBERS = ALLIANCE_MEMBERS.filter(m => m.role === 'leader')

/** Tất cả UID hợp lệ để nhập code (cả leader + member) */
export const ACTIVE_UIDS = ALLIANCE_MEMBERS
    .filter(m => m.uid)
    .map(m => m.uid)
