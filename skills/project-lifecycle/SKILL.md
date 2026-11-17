---
name: project-lifecycle
description: Dẫn dắt một dự án phần mềm theo quy trình có kiểm soát qua nhiều phiên Claude Code - (1) brainstorm & ghi lại yêu cầu/nghiệp vụ, (2) phân tích & đề xuất kiến trúc/tech stack, (3) thống nhất conventions, (4) thiết kế giao diện mẫu (HTML mockup), (5) code theo từng phần và cập nhật tài liệu sau mỗi phần - để mọi phiên sau đồng nhất với phiên trước, không tự ý đổi kiến trúc hay tech stack. Dùng skill này bất cứ khi nào người dùng muốn bắt đầu/khởi tạo một dự án mới, brainstorm ý tưởng app/hệ thống, chốt tech stack hay kiến trúc, đặt coding conventions, làm mockup giao diện trước khi code, "tiếp tục dự án"/"làm tiếp phần còn dở", hoặc khi thư mục có docs/progress.md hay CLAUDE.md nhắc tới project-lifecycle. Cũng dùng khi người dùng muốn dựng tài liệu cho một dự án đã có code để các phiên sau làm việc nhất quán. Start a new project, kickoff, brainstorm requirements, pick a tech stack, resume a project across sessions.
---

# Project Lifecycle

Skill này biến một dự án thành chuỗi giai đoạn có tài liệu đi kèm, để **tài liệu trong repo là nguồn sự thật duy nhất**. Mỗi phiên Claude mới không nhớ gì về phiên trước. Thứ duy nhất nối các phiên với nhau là file trên đĩa. Vì vậy:

- Mọi điều đã thống nhất với người dùng phải được **ghi xuống** ngay. Điều gì chỉ nằm trong cuộc trò chuyện thì coi như sẽ mất.
- Mọi phiên phải **đọc tài liệu trước khi làm**, và làm **đúng theo** tài liệu. Nếu thấy tài liệu sai hoặc lỗi thời, hãy báo người dùng thay vì lặng lẽ làm khác đi.

Giao tiếp và viết tài liệu bằng ngôn ngữ người dùng đang dùng (thường là tiếng Việt). Thuật ngữ kỹ thuật giữ nguyên tiếng Anh.

## Cấu trúc tài liệu

```
<project-root>/
├── CLAUDE.md              # Claude Code tự đọc mỗi phiên: tóm tắt + quy tắc bắt buộc + bản đồ tài liệu
├── docs/
│   ├── requirements.md    # Giai đoạn 1: nghiệp vụ, actor, chức năng, yêu cầu phi chức năng
│   ├── architecture.md    # Giai đoạn 2: tech stack, kiến trúc, cấu trúc thư mục, data model
│   ├── conventions.md     # Giai đoạn 3: quy ước code, đặt tên, git, test, xử lý lỗi
│   ├── ui-design.md       # Giai đoạn 4: danh sách màn hình, design tokens, liên kết mockup
│   ├── progress.md        # Trạng thái giai đoạn, backlog, việc đã xong, nhật ký phiên
│   └── decisions.md       # Nhật ký quyết định (ADR): mọi quyết định quan trọng + lý do
└── mockups/               # Giai đoạn 4: HTML/CSS tĩnh, mở trực tiếp bằng trình duyệt
```

Template cho từng file nằm ở `assets/templates/`. Đọc template tương ứng khi tạo file lần đầu. Cứ điều chỉnh cho hợp dự án, nhưng giữ các mục chính để phiên sau biết tìm thông tin ở đâu.

`CLAUDE.md` là file quan trọng nhất. Claude Code tự nạp nó vào mọi phiên, kể cả khi skill này không được kích hoạt. Nhờ vậy các quy tắc "không tự đổi kiến trúc" vẫn có hiệu lực. Hãy giữ nó **ngắn** (dưới khoảng 80 dòng): chỉ để tóm tắt, quy tắc và đường dẫn. Chi tiết để trong `docs/`. Nếu dự án đã có sẵn `CLAUDE.md`, đừng ghi đè: thêm các mục của skill vào và giữ nguyên nội dung cũ.

## Bước 0: Xác định đang ở đâu (luôn làm đầu tiên)

Trước khi hỏi hay làm gì, xem thư mục dự án:

1. Có `docs/progress.md` không? Nếu có, đọc nó cùng `CLAUDE.md` để biết giai đoạn hiện tại, việc đang dở và bước tiếp theo. Mở đầu câu trả lời bằng **một đoạn tóm tắt 3-6 dòng** ("Dự án X, đang ở giai đoạn Y, lần trước đã làm Z, bước tiếp theo là W"). Đoạn này cho người dùng thấy phiên mới đã nắm đúng ngữ cảnh, và nếu có gì sai họ sẽ phát hiện ngay. Sau đó:
   - Nếu người dùng bảo làm tiếp và tài liệu đã ghi rõ bước tiếp theo, **làm luôn**. Hỏi lại "muốn làm gì?" lúc này chỉ tốn thêm một lượt.
   - Nếu có việc **đang dở** (trạng thái `Đang làm`, ghi chú "chưa xong", câu hỏi còn mở), ưu tiên hoàn thành việc đó trước. Đối chiếu code thực tế với ghi chú để biết chính xác đã làm tới đâu, rồi làm tiếp từ đó, không làm lại từ đầu.
   - Nếu bước tiếp theo phụ thuộc một quyết định chưa được người dùng chốt (ghi trong "Câu hỏi còn mở", "chờ xác nhận"...), **đừng tự quyết rồi code**. Làm phần không phụ thuộc quyết định đó (nếu có), rồi hỏi kèm phương án bạn đề xuất.
   - Nếu không rõ nên làm gì tiếp, hoặc yêu cầu của người dùng khác với bước tiếp theo trong tài liệu, thì hỏi.
2. Không có tài liệu nhưng **đã có code**? Chuyển sang mục "Dự án đã có code" ở cuối.
3. Không có gì cả? Bắt đầu Giai đoạn 1.

Trạng thái mỗi giai đoạn ghi trong bảng ở `docs/progress.md` và `CLAUDE.md`: `Chưa bắt đầu`, `Đang làm`, hoặc `Đã chốt (YYYY-MM-DD)`. "Đã chốt" nghĩa là người dùng đã xác nhận rõ ràng. Đừng tự đánh dấu chốt chỉ vì mình đã viết xong file.

## Cổng chuyển giai đoạn

Các giai đoạn đi theo thứ tự vì giai đoạn sau dựa vào giai đoạn trước. Chọn tech stack khi chưa rõ nghiệp vụ là đoán mò. Code khi chưa có conventions thì mỗi phiên sẽ viết một kiểu.

- Chỉ chuyển giai đoạn khi tài liệu giai đoạn hiện tại đã được người dùng **xác nhận chốt**.
- Nếu người dùng muốn nhảy cóc (vd. "code luôn đi"), nói ngắn gọn còn thiếu gì và rủi ro là gì. Nếu họ vẫn muốn thì làm theo, nhưng ghi vào `decisions.md` rằng giai đoạn đó bị bỏ qua hoặc làm tối giản theo yêu cầu. Người dùng là người quyết định, việc của skill là để quyết định đó được ghi lại.
- Dự án nhỏ thì mỗi giai đoạn có thể rất ngắn: requirements nửa trang, conventions vài gạch đầu dòng. Đừng bắt một tool nhỏ đi qua thủ tục của hệ thống doanh nghiệp.

## Giai đoạn 1: Yêu cầu & nghiệp vụ

Mục tiêu là hiểu dự án giải quyết vấn đề gì, cho ai, gồm những chức năng nào và cái gì ưu tiên.

- Hỏi **từng đợt 3-5 câu**, bắt đầu từ bức tranh lớn rồi đi dần vào chi tiết. Hỏi dồn 30 câu một lúc thì người dùng sẽ trả lời qua loa. Bộ câu hỏi gợi ý nằm trong `references/interview-guide.md`.
- Sau mỗi đợt trả lời, **ghi ngay** vào `docs/requirements.md` (trạng thái Nháp), đừng đợi đến cuối. Nếu phiên bị ngắt giữa chừng, phần đã trao đổi vẫn còn.
- Giai đoạn này chỉ hỏi về **nghiệp vụ**. Những câu kỹ thuật (cloud hay máy tại quán, người dùng biết ngôn ngữ nào...) để dành cho giai đoạn 2. Nếu người dùng tự nhắc tới thì cứ ghi vào mục ràng buộc trong requirements.
- **Đóng vai chuyên gia nghiệp vụ, không chỉ là người ghi chép.** Người dùng thường chỉ kể luồng chính. Giá trị của giai đoạn này nằm ở những gì họ chưa nghĩ tới. Dựa vào hiểu biết về lĩnh vực của dự án, chủ động bổ sung vào nháp, đánh dấu "(đề xuất - chờ xác nhận)":
  - Các trường hợp ngoại lệ trong luồng chính: hủy, sửa, hoàn tiền, trùng lặp, thao tác nhầm.
  - Dữ liệu lịch sử phải giữ đúng theo thời điểm, vd. lưu giá trên từng dòng đơn tại lúc bán để đổi giá menu không làm sai doanh thu cũ.
  - Phân quyền: ai được làm gì, nhất là các thao tác ảnh hưởng tới tiền và dữ liệu.
  - Báo cáo, đối soát, nhật ký thao tác mà chủ dự án sẽ cần.
  - Mô hình dữ liệu nghiệp vụ sơ bộ: các thực thể và quan hệ giữa chúng.
  - Giải pháp có sẵn trên thị trường. Nếu nhu cầu đã được các sản phẩm phổ biến đáp ứng tốt, nói ngắn gọn để người dùng cân nhắc tự làm hay dùng sẵn. Họ có thể có lý do riêng để tự làm, việc của bạn là giúp họ quyết định có thông tin.
- Chỉ ra chỗ mơ hồ, mâu thuẫn hoặc thiếu (vd. "chưa nói ai được xóa đơn hàng"). Đề xuất cách hiểu hợp lý để người dùng chỉ cần gật đầu hoặc sửa.
- Mọi câu hỏi chưa có lời đáp đều ghi vào mục "Câu hỏi còn mở" trong requirements. Nếu người dùng bỏ ngang, phiên sau vẫn biết còn thiếu gì.
- Chia chức năng theo mức ưu tiên (MVP / sau MVP) và đánh mã (`F01`, `F02`...). Các giai đoạn sau sẽ tham chiếu theo mã này.
- Kết thúc giai đoạn: trình bày tóm tắt requirements và hỏi người dùng có chốt không. Khi họ đồng ý thì cập nhật trạng thái.

## Giai đoạn 2: Kiến trúc & tech stack

Ở giai đoạn này Claude đóng vai kiến trúc sư: **hỏi ràng buộc, phân tích, rồi đề xuất**. Không chỉ chép lại lựa chọn của người dùng.

1. Hỏi các ràng buộc ảnh hưởng tới lựa chọn: kỹ năng của team, quy mô người dùng, ngân sách và hạ tầng, nơi deploy, thời hạn, hệ thống cần tích hợp, yêu cầu bảo mật. Xem `references/interview-guide.md`. Câu nào đã có trong requirements thì đừng hỏi lại.
2. Với mỗi quyết định lớn (kiểu kiến trúc, backend, frontend, database, auth, hosting...), đưa ra **2-3 phương án kèm đánh đổi** gắn với ràng buộc của dự án, rồi **nêu rõ phương án bạn đề xuất và vì sao**. Phân tích chung chung kiểu "React phổ biến" không giúp được gì. Cần nói được "vì team chỉ có 1 dev và cần ra MVP trong 1 tháng, nên...".
3. Sau khi người dùng chọn, viết `docs/architecture.md`: tech stack **kèm phiên bản cụ thể**, sơ đồ kiến trúc (Mermaid hoặc ASCII), cấu trúc thư mục, data model chính và các luồng chính. Ghi rõ phiên bản vì "React" của phiên này có thể thành "React 19" ở phiên sau.
4. Ghi mỗi quyết định lớn thành một mục ADR trong `docs/decisions.md`, gồm bối cảnh, các phương án, lựa chọn và lý do. Khi phiên sau thắc mắc "sao lại dùng X", câu trả lời đã nằm ở đây.
5. Người dùng xác nhận thì chốt, rồi cập nhật mục "Tech stack đã chốt" trong `CLAUDE.md`.
6. **Tìm skills cho stack đã chốt** (bước bắt buộc theo yêu cầu của người dùng). Mục đích là để mọi phiên code sau dùng chung một bộ kiến thức chuyên sâu về framework, thay vì mỗi phiên tự nhớ một kiểu. Làm như sau, xem chi tiết ở mục "Tìm skills cho stack" bên dưới.

### Tìm skills cho stack

Chỉ tìm cho **backend** và **frontend** (framework/ngôn ngữ chính, vd. "nestjs", "fastapi", "nextjs", "vue"). Không tìm cho database, hosting hay các phần khác.

1. **Đảm bảo có skill find-skills.** Kiểm tra `~/.claude/skills/find-skills/` hoặc `.claude/skills/find-skills/` trong dự án. Nếu chưa có thì cài:
   ```bash
   npx skills add https://github.com/vercel-labs/skills --skill find-skills
   ```
   Sau đó đọc `SKILL.md` của find-skills và làm theo quy trình của nó.
2. **Tìm** theo từng phần: một lượt cho backend, một lượt cho frontend. Dùng tên framework kèm phiên bản hoặc từ khóa liên quan (vd. `npx skills find nestjs`, `npx skills find react`). Không ra kết quả thì thử từ khóa khác (ngôn ngữ, hệ sinh thái).
3. **Lọc chất lượng** theo tiêu chí của find-skills: số lượt cài, nguồn uy tín, số sao trên GitHub. Ngoài ra skill phải **khớp với lựa chọn đã chốt**. Ví dụ: dự án chốt Next.js App Router thì loại skill hướng dẫn Pages Router; chốt Prisma thì loại skill bắt dùng Drizzle. Một skill dạy làm khác kiến trúc đã chốt sẽ kéo các phiên sau đi lệch, nên tệ hơn là không có skill nào.
4. **Trình bày cho người dùng** danh sách ngắn (tối đa 2-3 skill mỗi phần): tên, skill làm gì, số lượt cài, nguồn, lệnh cài, và lý do nó hợp với dự án. Hỏi người dùng chọn skill nào, và cài vào dự án (đi theo repo, cả team và mọi máy đều có) hay cài global.
5. **Cài** những skill người dùng đồng ý, rồi đọc lướt `SKILL.md` của từng skill để chắc nội dung không mâu thuẫn với architecture và conventions.
6. **Ghi lại**:
   - Trong `docs/architecture.md`, mục "Skills cho stack": tên skill, nguồn, lệnh cài, phạm vi áp dụng (backend/frontend), ngày cài.
   - Trong `CLAUDE.md`, mục "Skills cho stack": danh sách skill và quy tắc "dùng skill X khi code phần Y". Nhờ vậy phiên sau biết phải dùng skill nào, và cài lại được nếu máy mới chưa có.
   - Nếu không tìm được skill phù hợp, hoặc người dùng không muốn cài, ghi lại điều đó để phiên sau khỏi tìm lại.

**Thứ tự ưu tiên:** tài liệu dự án (architecture, conventions, ADR) luôn đứng trên hướng dẫn của skill bên ngoài. Nếu skill khuyên làm khác conventions đã chốt, làm theo conventions. Nếu thấy lời khuyên của skill đáng cân nhắc, đưa vào "Đề xuất cải tiến" để người dùng quyết định.

Khi tech stack thay đổi qua ADR mới, lặp lại bước này cho phần bị đổi và gỡ những skill không còn phù hợp (sau khi hỏi người dùng).

## Giai đoạn 3: Conventions

Mục tiêu là để mọi phiên viết code giống như do cùng một người viết.

- Dựa trên stack đã chốt, **soạn sẵn một bộ conventions mặc định hợp lý** (theo chuẩn cộng đồng của stack đó) rồi hỏi người dùng muốn chỉnh gì. Cách này hiệu quả hơn bắt họ tự nghĩ từ đầu.
- Phạm vi gồm: đặt tên (file, biến, component, bảng DB, API endpoint), cấu trúc module, format/lint (công cụ + config), xử lý lỗi và logging, quy ước API (response format, mã lỗi), test (loại, vị trí, mức bao phủ), git (branch, commit message), comment và tài liệu trong code.
- Viết bằng **ví dụ cụ thể** (đúng/sai) thay vì mô tả trừu tượng. Ví dụ ít bị hiểu sai giữa các phiên hơn.
- Nếu thiết lập được bằng công cụ (eslint, prettier, ruff, editorconfig...), ghi lại trong conventions và tạo config ở giai đoạn code đầu tiên. Công cụ tự kiểm tra thì đáng tin hơn trí nhớ.
- Người dùng xác nhận thì chốt.

## Giai đoạn 4: Giao diện mẫu

Chỉ bắt đầu khi requirements, kiến trúc và conventions đều đã chốt (trừ khi đã ghi nhận bỏ qua). Nếu dự án không có giao diện (API thuần, CLI, thư viện), hỏi người dùng có muốn bỏ qua giai đoạn này không, rồi ghi lại.

- Liệt kê các màn hình cần có, map mỗi màn hình với mã chức năng `Fxx`, và **xác nhận danh sách với người dùng trước** khi vẽ.
- Làm mockup bằng **HTML/CSS tĩnh** trong `mockups/`: mỗi màn hình một file, một file `mockups/styles.css` dùng chung chứa design tokens (màu, font, spacing, radius dưới dạng CSS variables), và `mockups/index.html` liệt kê, link tới mọi màn hình. Dữ liệu giả phải trông thật (tên, số liệu hợp lý) và đúng ngôn ngữ người dùng. Không dùng framework hay build step, chỉ cần mở file là xem được.
- Làm từng nhóm màn hình, cho người dùng xem và góp ý, sửa rồi mới làm tiếp.
- Ghi vào `docs/ui-design.md`: danh sách màn hình ↔ file mockup ↔ chức năng, design tokens, các component dùng lại, và quyết định UX quan trọng. Khi code, mockup là chuẩn để đối chiếu. Design tokens trong code nên khớp với `styles.css`.
- Người dùng xác nhận thì chốt.

## Giai đoạn 5: Code

### Lập kế hoạch
Chia công việc thành các phần nhỏ, mỗi phần làm xong và kiểm tra được trong khoảng một phiên (vd. "Khởi tạo project + config lint", "F01 Đăng nhập", "F03 Danh sách đơn hàng"). Ghi vào backlog trong `docs/progress.md` theo thứ tự hợp lý: nền tảng trước, MVP trước. Cho người dùng duyệt thứ tự.

### Mỗi phần việc
1. **Đọc trước khi viết**: đọc `architecture.md`, `conventions.md`, phần requirements và mockup liên quan, và xem code hiện có cùng loại để làm theo pattern sẵn có. Nếu mục "Skills cho stack" có skill cho phần sắp làm (backend/frontend), dùng skill đó. Nếu skill chưa được cài trên máy này, cài lại theo lệnh đã ghi.
2. Đánh dấu phần việc là `Đang làm` trong progress.md.
3. Code đúng stack, kiến trúc và conventions đã chốt. Viết test theo conventions. Sửa ở mức tối thiểu cần thiết và giữ nguyên định dạng file (line endings, indent). Diff gọn thì người dùng dễ review và các phiên sau dễ theo dõi.
4. Chạy lint, test và build. Báo kết quả trung thực, kể cả khi fail.
5. **Cập nhật tài liệu (Definition of Done)**. Một phần việc chỉ coi là xong khi tài liệu phản ánh đúng code:
   - `progress.md`: chuyển sang Đã xong, ghi ngắn đã làm gì, file chính, việc còn dở hoặc nợ kỹ thuật.
   - `architecture.md`: nếu thêm module, bảng DB, API endpoint, biến môi trường hoặc thư viện mới.
   - `requirements.md`: nếu hiểu thêm hoặc làm rõ nghiệp vụ trong lúc code (ghi rõ đã được người dùng xác nhận).
   - `decisions.md`: nếu có quyết định kỹ thuật đáng kể.
   - `ui-design.md`: nếu thêm component dùng lại hoặc lệch so với mockup (kèm lý do).

   Vì sao phải kỹ như vậy? Phiên sau chỉ biết những gì được ghi. Một endpoint không được ghi lại sẽ bị phiên sau viết trùng hoặc viết khác.

### Thêm thư viện
Thêm một thư viện **nhỏ, phục vụ một việc cụ thể và phù hợp với stack** (vd. thư viện format ngày) thì được, nhưng phải ghi vào architecture.md. Thêm thứ gì **thay thế hoặc chồng chéo với lựa chọn đã chốt** (đổi ORM, thêm state manager thứ hai, đổi UI library) là thay đổi kiến trúc, phải theo quy trình dưới đây.

## Kiểm soát thay đổi: không tự ý đổi điều đã chốt

Đây là lý do skill tồn tại. Những gì đã chốt (tech stack, kiến trúc, cấu trúc thư mục, conventions, design tokens, phạm vi chức năng) **chỉ được đổi khi người dùng đồng ý rõ ràng**.

Khi bạn thấy cần đổi, hoặc yêu cầu của người dùng mâu thuẫn với tài liệu (vd. tài liệu chốt PostgreSQL nhưng người dùng bảo "lưu vào MongoDB"):
1. **Dừng lại, chưa code.** Nói rõ: điều đã chốt là gì (dẫn nguồn file/ADR), thay đổi đề xuất là gì, ảnh hưởng ra sao (code cần sửa, rủi ro, công sức).
2. Đưa ra phương án, bao gồm cả lựa chọn "giữ nguyên" nếu có cách đạt mục tiêu mà không phải đổi.
3. Người dùng đồng ý thì ghi ADR mới trong `decisions.md`, đánh dấu ADR cũ là "Bị thay thế bởi ADR-xxx", cập nhật mọi tài liệu liên quan và `CLAUDE.md`, rồi mới sửa code.

Đừng "tiện tay" cải tiến những thứ ngoài phạm vi yêu cầu, như đổi cấu trúc thư mục, đổi tên hàng loạt hay nâng cấp major version. Có ý tưởng hay thì ghi vào mục "Đề xuất cải tiến" trong progress.md để người dùng quyết định.

## Kết thúc phiên

Trước khi kết thúc một phiên làm việc đáng kể (hoặc khi người dùng nói tạm dừng), cập nhật mục "Nhật ký phiên" trong `docs/progress.md`: ngày, đã làm gì, đang dở gì, **bước tiếp theo cụ thể**. Phiên sau bắt đầu từ chính dòng này.

## Dự án đã có code nhưng chưa có tài liệu

1. Khảo sát code: file manifest (package.json, pom.xml, requirements.txt, go.mod...), cấu trúc thư mục, config, vài file tiêu biểu mỗi tầng, git log nếu có.
2. Dựng nháp `architecture.md` (stack + phiên bản thực tế, cấu trúc, pattern đang dùng) và `conventions.md` (quy ước **thực tế đang có trong code**, không phải quy ước lý tưởng). Nếu code không nhất quán, liệt kê các kiểu đang tồn tại và hỏi người dùng muốn chuẩn hóa theo kiểu nào.
3. Suy ra nháp `requirements.md` từ các chức năng đang có. Những gì không suy ra được (mục tiêu kinh doanh, người dùng, ưu tiên) thì hỏi người dùng.
4. Trình bày cho người dùng xác nhận hoặc sửa từng file rồi chốt. Sau khi chốt stack, làm bước "Tìm skills cho stack" cho backend và frontend thực tế đang dùng. Tạo `progress.md` (ghi những gì đã có là Đã xong), `decisions.md` (ADR-001: "Ghi nhận hiện trạng"), và `CLAUDE.md`.
5. Sau đó tiếp tục từ giai đoạn phù hợp, thường là 4 hoặc 5.
