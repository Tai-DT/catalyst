"use client";

import React, { useState } from 'react';
import { Button } from '../../components/button';
import { Alert, AlertTitle, AlertDescription, AlertActions } from '../../components/alert';
import { Avatar } from '../../components/avatar';
import { Badge } from '../../components/badge';
import { Checkbox } from '../../components/checkbox';
import { DescriptionList, DescriptionTerm, DescriptionDetails } from '../../components/description-list';
import { Dialog, DialogTitle, DialogDescription, DialogActions } from '../../components/dialog';
import { Divider } from '../../components/divider';
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from '../../components/dropdown';
import { Fieldset, Legend, Field, Label, Description } from '../../components/fieldset';
import { Heading } from '../../components/heading';
import { Input } from '../../components/input';
import { Link } from '../../components/link';
import { Listbox, ListboxOption, ListboxLabel, ListboxDescription } from '../../components/listbox';
import { Navbar, NavbarItem, NavbarSection, NavbarLabel } from '../../components/navbar';
import { Pagination, PaginationList, PaginationPage, PaginationPrevious, PaginationNext } from '../../components/pagination';
import { RadioGroup, RadioField, Radio } from '../../components/radio';
import { Select } from '../../components/select';
import { Sidebar, SidebarHeader, SidebarBody, SidebarSection, SidebarItem, SidebarLabel, SidebarHeading } from '../../components/sidebar';
import { StackedLayout } from '../../components/stacked-layout';
import { Switch } from '../../components/switch';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/table';
import { Text } from '../../components/text';
import { Textarea } from '../../components/textarea';

export default function ComponentDemo() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [switchOn, setSwitchOn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [listboxValue, setListboxValue] = useState('');

  // Helper function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-16">
      <section className="space-y-4">
        <Heading level={2}>Buttons</Heading>
        <div className="flex flex-wrap gap-4">
          <Button>Button mặc định</Button>
          <Button color="blue">Button xanh</Button>
          <Button color="red">Button đỏ</Button>
          <Button outline>Outline</Button>
          <Button plain>Plain</Button>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Alert</Heading>
        <Button onClick={() => setAlertOpen(true)}>Hiển thị Alert</Button>
        <Alert open={alertOpen} onClose={() => setAlertOpen(false)}>
          <AlertTitle>Thông báo</AlertTitle>
          <AlertDescription>Đây là một thông báo quan trọng.</AlertDescription>
          <AlertActions>
            <Button onClick={() => setAlertOpen(false)}>Đóng</Button>
          </AlertActions>
        </Alert>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Dialog</Heading>
        <Button onClick={() => setDialogOpen(true)}>Mở Dialog</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Tiêu đề Dialog</DialogTitle>
          <DialogDescription>
            Đây là nội dung của dialog, bạn có thể thêm bất kỳ thông tin nào ở đây.
          </DialogDescription>
          <DialogActions>
            <Button plain onClick={() => setDialogOpen(false)}>
              Hủy
            </Button>
            <Button onClick={() => setDialogOpen(false)}>Đồng ý</Button>
          </DialogActions>
        </Dialog>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Avatar</Heading>
        <div className="flex gap-4">
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Badge</Heading>
        <div className="flex gap-2">
          <Badge>Mặc định</Badge>
          <Badge color="blue">Xanh</Badge>
          <Badge color="red">Đỏ</Badge>
          <Badge color="green">Xanh lá</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Checkbox</Heading>
        <div className="space-y-2">
          <Checkbox>Tùy chọn 1</Checkbox>
          <Checkbox defaultChecked>Tùy chọn 2</Checkbox>
          <Checkbox disabled>Tùy chọn vô hiệu hóa</Checkbox>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>DescriptionList</Heading>
        <DescriptionList>
          <DescriptionTerm>Tên</DescriptionTerm>
          <DescriptionDetails>Nguyễn Văn A</DescriptionDetails>
          
          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>example@example.com</DescriptionDetails>
          
          <DescriptionTerm>Địa chỉ</DescriptionTerm>
          <DescriptionDetails>Hà Nội, Việt Nam</DescriptionDetails>
        </DescriptionList>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Divider</Heading>
        <div className="space-y-4">
          <Text>Nội dung phía trên divider</Text>
          <Divider />
          <Text>Nội dung phía dưới divider</Text>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Dropdown</Heading>
        <Dropdown>
          <DropdownButton>Tùy chọn</DropdownButton>
          <DropdownMenu>
            <DropdownItem onClick={() => console.log('Chọn tùy chọn 1')}>Tùy chọn 1</DropdownItem>
            <DropdownItem onClick={() => console.log('Chọn tùy chọn 2')}>Tùy chọn 2</DropdownItem>
            <DropdownItem onClick={() => console.log('Chọn tùy chọn 3')}>Tùy chọn 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Fieldset</Heading>
        <Fieldset>
          <Legend>Thông tin cá nhân</Legend>
          <div className="space-y-4 mt-4">
            <Field>
              <Label>Họ và tên</Label>
              <Input placeholder="Nhập tên của bạn" />
            </Field>
            <Field>
              <Label>Email</Label>
              <Input type="email" placeholder="Nhập email của bạn" />
              <Description>Chúng tôi sẽ không chia sẻ email của bạn với bất kỳ ai.</Description>
            </Field>
          </div>
        </Fieldset>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Link</Heading>
        <div className="space-y-2">
          <div>
            <Link href="https://example.com">Link bình thường</Link>
          </div>
          <div>
            <Link href="https://example.com" target="_blank">Link mở trong tab mới</Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Input</Heading>
        <div className="space-y-4 max-w-md">
          <Input placeholder="Nhập tên của bạn" />
          <Input type="email" placeholder="Nhập email của bạn" />
          <Input type="password" placeholder="Nhập mật khẩu" />
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Navbar</Heading>
        <div className="border rounded-lg p-4">
          <Navbar>
            <NavbarSection>
              <NavbarItem current>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" data-slot="icon">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <NavbarLabel>Trang chủ</NavbarLabel>
              </NavbarItem>
              <NavbarItem>
                <NavbarLabel>Giới thiệu</NavbarLabel>
              </NavbarItem>
              <NavbarItem>
                <NavbarLabel>Liên hệ</NavbarLabel>
              </NavbarItem>
            </NavbarSection>
          </Navbar>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Pagination</Heading>
        <Pagination>
          <PaginationPrevious 
            href={currentPage > 1 ? `#${currentPage - 1}` : null}
          />
          <PaginationList>
            {Array.from({ length: 5 }, (_, i) => i + 1).map(page => (
              <PaginationPage 
                key={page} 
                href={`#${page}`} 
                current={page === currentPage}
              >
                {page}
              </PaginationPage>
            ))}
          </PaginationList>
          <PaginationNext 
            href={currentPage < 5 ? `#${currentPage + 1}` : null}
          />
        </Pagination>
        <div className="mt-4">
          <Text>Trang hiện tại: {currentPage}</Text>
          <div className="flex gap-2 mt-2">
            <Button onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>Trang trước</Button>
            <Button onClick={() => currentPage < 5 && handlePageChange(currentPage + 1)} disabled={currentPage >= 5}>Trang sau</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Radio</Heading>
        <RadioGroup value={radioValue} onChange={setRadioValue}>
          <div className="space-y-2">
            <RadioField>
              <Radio value="1" />
              <Heading level={4} data-slot="label">Tùy chọn 1</Heading>
            </RadioField>
            <RadioField>
              <Radio value="2" />
              <Heading level={4} data-slot="label">Tùy chọn 2</Heading>
            </RadioField>
            <RadioField>
              <Radio value="3" disabled />
              <Heading level={4} data-slot="label">Tùy chọn vô hiệu hóa</Heading>
            </RadioField>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Switch</Heading>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <Switch checked={switchOn} onChange={setSwitchOn} />
            <Text>{switchOn ? 'Đã bật' : 'Đã tắt'}</Text>
          </div>
          <div className="flex items-center gap-4">
            <Switch disabled />
            <Text>Vô hiệu hóa</Text>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Table</Heading>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Tên</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Vai trò</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Nguyễn Văn A</TableCell>
              <TableCell>nguyenvana@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trần Thị B</TableCell>
              <TableCell>tranthib@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Textarea</Heading>
        <div className="max-w-md">
          <Textarea placeholder="Nhập mô tả..." rows={4} />
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Select</Heading>
        <div className="max-w-md">
          <Select>
            <option value="">Chọn một tùy chọn</option>
            <option value="1">Tùy chọn 1</option>
            <option value="2">Tùy chọn 2</option>
            <option value="3">Tùy chọn 3</option>
          </Select>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Listbox</Heading>
        <div className="max-w-md">
          <Listbox value={listboxValue} onChange={setListboxValue} placeholder="Chọn một tùy chọn">
            <ListboxOption value="option1">
              <ListboxLabel>Tùy chọn 1</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="option2">
              <ListboxLabel>Tùy chọn 2</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="option3">
              <ListboxLabel>Tùy chọn 3</ListboxLabel>
              <ListboxDescription>Mô tả chi tiết</ListboxDescription>
            </ListboxOption>
          </Listbox>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Sidebar</Heading>
        <div className="border rounded-lg p-4 overflow-hidden">
          <div className="flex">
            <div className="w-64 h-96 bg-white border rounded-lg shadow-sm dark:bg-zinc-900">
              <Sidebar>
                <SidebarHeader className="bg-gray-50 dark:bg-zinc-800 border-b">
                  <div className="px-4 py-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" data-slot="icon">
                      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 2.5 10.057a.75.75 0 0 1-.232-1.338A60.653 60.653 0 0 1 11.7 2.805Z" />
                      <path d="M13.175 10.237a.75.75 0 0 1-.455.956 49.1 49.1 0 0 0-3.55 1.631 49.98 49.98 0 0 0-5.956 3.695.75.75 0 0 1-.891-1.206 51.875 51.875 0 0 1 6.173-3.823 50.647 50.647 0 0 1 3.675-1.697.75.75 0 0 1 .954.444ZM12.358 17.074a.75.75 0 0 1-.565.891 48.883 48.883 0 0 1-3.41.505.75.75 0 1 1-.182-1.49 47.385 47.385 0 0 0 3.303-.488.75.75 0 0 1 .854.582ZM18.427 14.531a.75.75 0 0 1-.944.5 50.038 50.038 0 0 0-4.831-1.192.75.75 0 0 1 .186-1.486 51.337 51.337 0 0 1 5.096 1.272.75.75 0 0 1 .493.905Z" />
                    </svg>
                    <Heading level={4} className="font-bold text-gray-900 dark:text-white">Dashboard</Heading>
                  </div>
                  <SidebarSection>
                    <SidebarItem className="mx-2 my-1 hover:bg-gray-100 dark:hover:bg-zinc-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                      <SidebarLabel className="font-medium">Trang chủ</SidebarLabel>
                    </SidebarItem>
                  </SidebarSection>
                </SidebarHeader>
                <SidebarBody className="px-2 py-2">
                  <SidebarSection>
                    <SidebarHeading className="px-3 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Quản lý</SidebarHeading>
                    <SidebarItem current className="rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 my-1 hover:bg-blue-100 dark:hover:bg-blue-900/40">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" data-slot="icon">
                        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                      </svg>
                      <SidebarLabel className="font-medium">Tài liệu</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem className="rounded-md my-1 hover:bg-gray-100 dark:hover:bg-zinc-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                      </svg>
                      <SidebarLabel className="font-medium">Cài đặt</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem className="rounded-md my-1 hover:bg-gray-100 dark:hover:bg-zinc-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                      </svg>
                      <SidebarLabel className="font-medium">Hỗ trợ</SidebarLabel>
                    </SidebarItem>
                  </SidebarSection>
                </SidebarBody>
              </Sidebar>
            </div>
            <div className="flex-1 p-6 bg-gray-50 dark:bg-zinc-800 rounded-r-lg">
              <Heading level={3} className="text-gray-900 dark:text-white">Nội dung chính</Heading>
              <Text className="mt-4 text-gray-600 dark:text-gray-300">Đây là phần nội dung chính sẽ hiển thị khi người dùng chọn một mục trong sidebar.</Text>
              <div className="mt-6 p-4 border rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2" data-slot="icon">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                  <Text className="font-medium">Đã chọn mục: <strong>Tài liệu</strong></Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Heading level={2}>Layouts</Heading>
        <div className="space-y-6">
          <div>
            <Heading level={3}>SidebarLayout</Heading>
            <Text className="mt-1 mb-2 text-gray-600 dark:text-gray-400">Layout với thanh điều hướng bên trái cố định và nội dung chính bên phải.</Text>
            <div className="border rounded-lg overflow-hidden" style={{ height: '700px', position: 'relative' }}>
              <div className="absolute inset-0 flex">
                <nav className="flex h-full min-h-0 flex-col">
                  <div className="bg-gray-50 dark:bg-zinc-800 border-b flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5">
                    <div className="px-4 py-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" data-slot="icon">
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 2.5 10.057a.75.75 0 0 1-.232-1.338A60.653 60.653 0 0 1 11.7 2.805Z"></path>
                        <path d="M13.175 10.237a.75.75 0 0 1-.455.956 49.1 49.1 0 0 0-3.55 1.631 49.98 49.98 0 0 0-5.956 3.695.75.75 0 0 1-.891-1.206 51.875 51.875 0 0 1 6.173-3.823 50.647 50.647 0 0 1 3.675-1.697.75.75 0 0 1 .954.444ZM12.358 17.074a.75.75 0 0 1-.565.891 48.883 48.883 0 0 1-3.41.505.75.75 0 1 1-.182-1.49 47.385 47.385 0 0 0 3.303-.488.75.75 0 0 1 .854.582ZM18.427 14.531a.75.75 0 0 1-.944.5 50.038 50.038 0 0 0-4.831-1.192.75.75 0 0 1 .186-1.486 51.337 51.337 0 0 1 5.096 1.272.75.75 0 0 1 .493.905Z" />
                      </svg>
                      <h4 className="font-bold text-gray-900 dark:text-white text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">Dashboard</h4>
                    </div>
                    <div data-slot="section" className="flex flex-col gap-0.5">
                      <span className="mx-2 my-1 hover:bg-gray-100 dark:hover:bg-zinc-800 relative">
                        <button className="cursor-default flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white dark:data-current:*:data-[slot=icon]:fill-white" type="button" data-headlessui-state="">
                          <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                          </svg>
                          <span className="font-medium truncate">Trang chủ</span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="px-2 py-2 flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8">
                    <div data-slot="section" className="flex flex-col gap-0.5">
                      <h3 className="px-3 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400">Quản lý</h3>
                      <span className="rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 my-1 hover:bg-blue-100 dark:hover:bg-blue-900/40 relative">
                        <span className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white" style={{ opacity: 1 }}></span>
                        <button className="cursor-default flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white dark:data-current:*:data-[slot=icon]:fill-white" data-current="true" type="button" data-headlessui-state="">
                          <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" data-slot="icon">
                            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"></path>
                          </svg>
                          <span className="font-medium truncate">Tài liệu</span>
                        </button>
                      </span>
                      <span className="rounded-md my-1 hover:bg-gray-100 dark:hover:bg-zinc-800 relative">
                        <button className="cursor-default flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white dark:data-current:*:data-[slot=icon]:fill-white" type="button" data-headlessui-state="">
                          <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd"></path>
                          </svg>
                          <span className="font-medium truncate">Cài đặt</span>
                        </button>
                      </span>
                      <span className="rounded-md my-1 hover:bg-gray-100 dark:hover:bg-zinc-800 relative">
                        <button className="cursor-default flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white dark:data-current:*:data-[slot=icon]:fill-white" type="button" data-headlessui-state="">
                          <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"></path>
                          </svg>
                          <span className="font-medium truncate">Hỗ trợ</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </nav>
                
                <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
                  <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
                    <div className="mx-auto max-w-6xl">
                      <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg h-full overflow-y-auto">
                        <h3 className="text-gray-900 dark:text-white text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">Nội dung trang</h3>
                        <p data-slot="text" className="mt-4 text-gray-600 dark:text-gray-300 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">Đây là nội dung chính của trang. Trong layout này, sidebar được hiển thị cố định bên trái và nội dung hiển thị bên phải.</p>
                        <div className="mt-6 p-4 border rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2" data-slot="icon">
                              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                            </svg>
                            <p data-slot="text" className="font-medium text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">Đang xem: <strong>Tài liệu</strong></p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <h4 className="text-gray-900 dark:text-white text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">Tính năng của SidebarLayout</h4>
                          <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                            <li>Thanh điều hướng cố định ở đầu trang</li>
                            <li>Sidebar cố định ở bên trái</li>
                            <li>Nội dung chính hiển thị ở bên phải</li>
                            <li>Thiết kế responsive tự động điều chỉnh trên các thiết bị</li>
                            <li>Hỗ trợ đầy đủ chế độ sáng và tối (dark mode)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>

          <div>
            <Heading level={3}>StackedLayout</Heading>
            <Text className="mt-1 mb-2 text-gray-600 dark:text-gray-400">Layout linh hoạt với navbar ở trên cùng, sidebar có thể ẩn/hiện và nội dung chính.</Text>
            <div className="border rounded-lg mt-2 overflow-hidden" style={{ height: '550px', position: 'relative' }}>
              <div className="absolute inset-0">
                <StackedLayout
                  navbar={
                    <Navbar>
                      <NavbarSection>
                        <NavbarItem current>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600" data-slot="icon">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                          </svg>
                          <NavbarLabel>Trang chủ</NavbarLabel>
                        </NavbarItem>
                        <NavbarItem>
                          <NavbarLabel>Giới thiệu</NavbarLabel>
                        </NavbarItem>
                        <NavbarItem>
                          <NavbarLabel>Liên hệ</NavbarLabel>
                        </NavbarItem>
                      </NavbarSection>
                    </Navbar>
                  }
                  sidebar={
                    <Sidebar>
                      <SidebarHeader className="bg-gray-50 dark:bg-zinc-800 border-b">
                        <div className="px-4 py-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" data-slot="icon">
                            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM5.25 6.75h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 5.25H5.25a3 3 0 0 0-2.977 2.625c.794-.7 1.836-1.125 2.977-1.125ZM5.25 9h13.5c.966 0 1.89.166 2.75.47a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75H2.5a.75.75 0 0 0-.75.75v1.22a.75.75 0 0 0 .75.75c.86-.304 1.784-.47 2.75-.47Z" />
                            <path d="M2.286 15.579A4.483 4.483 0 0 1 5.25 14.25h13.5a4.483 4.483 0 0 1 2.964 1.329 3.017 3.017 0 0 0-2.122-5.316c-.854-.328-1.337-1.226-1.077-2.09a.755.755 0 0 1 .052-.163c.06-.119.122-.237.122-.362V7.5A.75.75 0 0 0 18 6.75H2.25a.75.75 0 0 0-.75.75v.189c0 .12.063.241.122.362a.75.75 0 0 1 .052.163c.26.864-.223 1.762-1.077 2.09a3.017 3.017 0 0 0-2.122 5.316 4.483 4.483 0 0 1 2.964-1.329h13.5a4.483 4.483 0 0 1 2.964 1.329 3.017 3.017 0 0 0-2.122-5.316L17.75 10.92a.75.75 0 0 0-.262-1.442l-1.81-.21c-1.299-.153-2.288-1.315-2.288-2.649 0-.287.036-.564.103-.825H7.758c.064.26.102.538.102.825 0 1.334-.989 2.496-2.288 2.649l-1.81.21a.75.75 0 0 0-.262 1.442l1.488.174a3.018 3.018 0 0 0-2.702 5.484Z" />
                          </svg>
                          <Heading level={4} className="font-bold text-gray-900 dark:text-white">Menu</Heading>
                        </div>
                        <SidebarSection>
                          <SidebarHeading className="px-3 text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Điều hướng</SidebarHeading>
                          <SidebarItem current className="mx-2 my-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" data-slot="icon">
                              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <SidebarLabel className="font-medium">Trang chủ</SidebarLabel>
                          </SidebarItem>
                          <SidebarItem className="mx-2 my-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                              <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.236 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                            </svg>
                            <SidebarLabel className="font-medium">Sản phẩm</SidebarLabel>
                          </SidebarItem>
                          <SidebarItem className="mx-2 my-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300" data-slot="icon">
                              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.697 6.697c-2.472 0-4.786-.684-6.761-1.873a.75.75 0 0 1-.363-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 1 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                            </svg>
                            <SidebarLabel className="font-medium">Dịch vụ</SidebarLabel>
                          </SidebarItem>
                        </SidebarSection>
                      </SidebarHeader>
                    </Sidebar>
                  }
                >
                  <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg h-full overflow-y-auto">
                    <Heading level={3} className="text-gray-900 dark:text-white">Nội dung trang</Heading>
                    <Text className="mt-4 text-gray-600 dark:text-gray-300">Đây là nội dung chính của trang. Trong layout này, navbar hiển thị ở trên cùng, sidebar hiển thị khi click vào menu (trên di động) và nội dung hiển thị ở phần còn lại.</Text>
                    <div className="mt-6 p-4 border rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2" data-slot="icon">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        <Text className="font-medium">Đang xem: <strong>Trang chủ</strong></Text>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Heading level={4} className="text-gray-900 dark:text-white">Tính năng của StackedLayout</Heading>
                      <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>Thanh điều hướng cố định ở đầu trang</li>
                        <li>Sidebar có thể đóng/mở linh hoạt</li>
                        <li>Tự động điều chỉnh theo kích thước màn hình</li>
                        <li>Sidebar tự động ẩn trên thiết bị di động</li>
                        <li>Hỗ trợ đầy đủ chế độ sáng và tối (dark mode)</li>
                      </ul>
                    </div>
                  </div>
                </StackedLayout>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
