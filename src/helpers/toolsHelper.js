// SweetAlert2 dimuat lazy (hanya saat dialog dibutuhkan) agar tidak membebani bundle awal / halaman login.
const loadSwal = () => import("sweetalert2").then((m) => m.default);

export const showSuccessDialog = async (text, title = "Berhasil") =>
  (await loadSwal()).fire({ icon: "success", title, text, timer: 1500, showConfirmButton: false });

export const showErrorDialog = async (text, title = "Gagal") =>
  (await loadSwal()).fire({ icon: "error", title, text });

export const showConfirmDialog = async (text, title = "Apakah kamu yakin?") => {
  const Swal = await loadSwal();
  const result = await Swal.fire({
    icon: "warning", title, text,
    showCancelButton: true, confirmButtonText: "Ya", cancelButtonText: "Batal",
    confirmButtonColor: "#4f46e5",
  });
  return result.isConfirmed;
};