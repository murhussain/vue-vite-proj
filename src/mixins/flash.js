import swal from 'sweetalert';

export default {
  methods: {
    flash(message) {
      swal('success!', message, 'success');
    }
  }
}