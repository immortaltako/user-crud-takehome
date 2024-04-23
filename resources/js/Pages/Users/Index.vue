<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full lg:w-2/3">


      <h1 class="text-4xl font-bold text-gray-800 my-8">User List</h1>

      <!-- ADD USER BUTTON -->
      <div class="flex justify-center mb-6">
        <a href="/users/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          <font-awesome-icon icon="user-plus" class="w-4 h-4 mr-2"/>
          Add User
        </a>
      </div>

      <div class="bg-white shadow-md rounded my-6">

        <!-- USER LIST TABLE -->
        <table class="min-w-max w-full">
          <thead>
            <tr class="bg-gray-200 text-gray-600 text-lg">
              <th class="py-3 px-6 text-left">Name</th>
              <th class="py-3 px-6 text-left">Email</th>
              <th class="py-3 px-6 text-left"></th>
              <th class="py-3 px-6 text-left"></th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-lg font-light">
            <tr v-for="user in users" :key="user.id" class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6">{{ user.name }}</td>
              <td class="py-3 px-6">{{ user.email }}</td>
              <td class="py-3 px-6">
                <a :href="`/users/${user.id}/edit`" class="text-blue-500 hover:text-blue-700">
                  <font-awesome-icon :icon="['fas', 'edit']" class="w-4 h-4 mr-2"/>
                </a>
              </td>
              <td class="py-3 px-6">
                <a href="#" class="text-red-500 hover:text-red-700"
                 @click.prevent="deleteUser(user)">
                  <font-awesome-icon :icon="['fas', 'trash-alt']" class="w-4 h-4 mr-2"/>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: Array,
  },
  methods: {
    deleteUser(user) {
      if (!confirm(`Are you sure you want to delete ${user.name}?`)) return;

      this.$inertia.delete(`/users/${user.id}`, {
        onSuccess() {
          alert(`User: ${user.name} deleted.`);
        },
      });

    },
  },
}
</script>
