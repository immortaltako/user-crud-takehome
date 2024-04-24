<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
    <div class="w-full lg:w-2/3 bg-white shadow-lg rounded p-8">

      <!-- USER CRUD BUTTON -->
      <div class="flex justify-center mb-8">
        <a href="/users" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 text-2xl rounded transition duration-300 ease-in-out">
          Go to User CRUD
        </a>
      </div>

      <h1 class="text-4xl font-bold text-gray-800 mb-8">Phillip McCubbin</h1>

      <p class="text-xl text-gray-600">
        619-278-8801 * Akron, OH * pd.mccubbin@gmail.com
      </p>

      <div class="my-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Objective</h2>
        <p class="text-gray-700 text-lg">
          Certified Laravel Developer with over 13 years’ experience in PHP applications and
          database systems development, seeks back-end or full-stack Sr. Software Engineer position.
        </p>
      </div>

      <div class="my-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Qualifications</h2>
        <ul class="list-disc list-inside text-gray-700 text-lg">
          <li>Certifications:</li>
          <ul class="list-inside ml-4">
            <li>Laravel Certified Developer - 2021</li>
            <li>Secret Security Clearance (DOD) - 2022</li>
            <li>AWS Certified: Solutions Architect - Associate - 2018</li>
          </ul>
        </ul>
      </div>

      <div class="my-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
        <ul class="list-disc list-inside text-gray-700 text-lg">
          <li>Programming Languages: PHP, JavaScript, Python</li>
          <li>Frameworks & Libraries: Laravel, Zend Framework, Django, Vue.js, jQuery</li>
          <li>Frontend Development: HTML, SCSS, CSS, Tailwind, Bootstrap, Foundation</li>
          <li>State Management: Vuex, Pinia</li>
          <li>Database Management: MySQL, Oracle, PostgreSQL, Memcached</li>
          <li>Testing Tools: Pest PHP, PHPUnit</li>
          <li>DevOps & Version Control: AWS, Docker, Apache, SSL, Git, GitHub Actions, Bitbucket Pipelines</li>
          <li>Miscellaneous: Laravel Sanctum, Laravel Shift, CI/CD practices, Agile methodologies</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'McCubbin'
}
</script>

<style>
.list-disc {
  list-style-type: disc;
}
</style>
