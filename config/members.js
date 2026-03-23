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
        uid: '1338934587000492',
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
    }
   
   
]

/** Leaders — hiển thị trên giao diện */
export const LEADER_MEMBERS = ALLIANCE_MEMBERS.filter(m => m.role === 'leader')

/** Tất cả UID hợp lệ để nhập code (cả leader + member) */
export const ACTIVE_UIDS = ALLIANCE_MEMBERS
    .filter(m => m.uid)
    .map(m => m.uid)
