<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full lg:w-2/3">
      <h1 class="text-4xl font-bold text-gray-800 my-8">Edit User</h1>

      <div class="bg-white shadow-md rounded my-6 p-8">
        <form @submit.prevent="updateUser">

          <!-- NAME -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input v-model="user.name" type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>

          <!-- EMAIL -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input v-model="user.email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>

          <!-- PASSWORD -->
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input v-model="user.password" type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            <p class="text-gray-600 text-xs italic">Leave blank to keep the current password.</p>
          </div>

          <!-- UPDATE USER BUTTON -->
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    updateUser() {
      let data = {...this.user};
      if (!this.user.password) delete data.password;

      // display validation errors if failure, otherwise display success
      this.$inertia.put(`/users/${this.user.id}`, data, {
        preserveState: true,
        onError: errors => {
          const errorsString = Object.values(errors).join('\n');
          if (errorsString) alert(errorsString);
        },
        onSuccess: () => {
          alert('User updated successfully');
        },
      });
    },
  },
}
</script>
