window.onload = function () {
	var app = new Vue({
			el: '#app',
			data: {
				message: 'Hello Vue.js!'
			}
		})

		var app2 = new Vue({
  			el: '#app-2',
  			data: {
   				message: 'You loaded this page on ' + new Date()
  			}
		})
		var app3 = new Vue({
			el: '#app-3',
			data: {
				seen: false
			}
		})

		var app4 = new Vue({
			el: '#app-4',
			data: {
				todos: [
					{text: "Learn javascript"},
					{text: "Learn Vue"},
					{text: "Build something awesome"}
				]
			}
		})

		var app5 = new Vue ({
			el: "#app-5",
			data: {
				message: "Hello vue.js"
			},
			methods: {
				reverseMessage: function () {
					this.message = this.message.split('').reverse().join('')
				}
			}
		})

		var app6 = new Vue({
  			el: '#app-6',
  			data: {
    			message: 'Hello Vue! 实时更新'
  			}
		})

		Vue.component('todo-item',{
			props: ['todo'],
			template: '<li>{{todo.text}}</li>'
		})
		var app7 = new Vue({
			el: "#app-7",
			data: {
				groceryList: [
				{text: 'Vegetables'}, 
				{text: 'Cheese'},
				{text: 'fira'},
				{text: 'adfasdf'}
				]
			}
		})

		var watchExampleVM = new Vue({
			el: '#watch-example',
			data: {
				question: "",
				answer: "I cannot give you an answer until you ask a question! "
			},
			watch: {
				question: function (newQuestion) {
					this.answer = "Waiting for you to  stop typing...",
					this.getAnswer()
				}
			},
			methods: {
				// _.debounce 是一个通过 lodash 限制操作频率的函数。
    			// 在这个例子中，我们希望限制访问yesno.wtf/api的频率
    			// ajax请求直到用户输入完毕才会发出
    			// 学习更多关于 _.debounce function (and its cousin
    			// _.throttle), 参考: https://lodash.com/docs#debounce
				getAnswer: _.debounce(
					function () {
						var vm = this
						if (this.question.indexOf('?') === -1) {
							vm.answer = 'Question usually contain a quetion mark. ;-)'
							return
						}
						vm.answer = 'Thinking......'
						axios.get('https://yesno.wtf/api')
							 .then(function (response) {
							 	vn.anser = _.capitalize(response.data.anser)
							 })
							 .catch(function (error) {
							 	vm.anser = 'Error! Could not reach the API. ' + error
							 })
					},

					//这里是我们为用户停止输入等待的毫秒数
					500

					)
			}
		})

		var classExample = new Vue({
			el: "#class-example",
			data: {
				isred: true,
				error: null
			},
			computed: {
				classObject: function () {
					return {
						blue: this.isred && !this.error,
						fontSize: this.error && this.error.type === 'fatal',
					}
				}
			}
		})

		var styleExample = new Vue({
			el: '#style-example',
			data: {
				msg: '这个msg哈哈哈哈,对象语法',
				styleObject: {
					color: 'red',
					fontSize: '30px'	
				}
			}
		})

		var vforExample = new Vue({
			el: "#v-forExample",
			data: {
				object: {
					FirstName: 'John',
					LastName: 'Doe',
					Age: 30
				}
			}
		})

		Vue.component('todo-item', {
		  template: '\
		    <li>     {{ title }}  <button v-on:click="$emit(\'remove\')">X</button></li>',
		    //组件中li的初始化    {{title}} 插值    button的点击事件. 触发li的remove. 
		  props: ['title']  //
		})
		var todoListExample = new Vue({
		  el: '#todo-list-example',
		  data: {
		    newTodoText: '',	//初始化input
		    todos: [			//初始化todos
		      'Do the dishes',
		      'Take out the trash',
		      'Mow the lawn'
		    ]
		  },
		  methods: {			//方法组
		    addNewTodo: function () {		
		      if (this.newTodoText == '') {			//如果没有输入值就按了enter键, 则不push到todos里. 
		      	return
		      }
		      this.todos.push(this.newTodoText)	//向data里的todos push input的值,通过v-for, li显示出来
		      this.newTodoText = '' 		//push完以后初始化newTodoText.  
		    }
		  }
		})

		var app13 = new Vue({
			el: '#app13',
			data: {
				numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			computed: {
				evenNumbers: function () {
					return this.numbers.filter(function (number) {
						return number%2 === 0
					})
				}
			}
		})

		var app14 = new Vue({
			el: '#app14',
			data: {
				numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
			},
			methods: {
				even: function (numbers) {
					return numbers.filter(function (number) {
						return number%2 === 0
					})
				}
			}
		})

		var app15 = new Vue({
			el: '#app15',
			data: {
				checked: false
			}
		})

		var app16 = new Vue({
			el: '#app16',
			data: {
				message: ''
			}
		})

		var app17 = new Vue({
		  el: '#app17',
		  data: {
		    checkedNames: []
		  }
		})

		Vue.component('button-counter', {
			template: '<button v-on:click="increment"> {{ counter }} </button>',
			data: function() {
				return{
					counter: 0
				}
			},
			methods: {
				increment : function() {
					this.counter +=1
					this.$emit('increment')
				}
			}
		})
		var app18 = new Vue({
			el: '#app18',
			data: {
				total: 0
			},
			methods: {
				incrementTotal: function(){
					this.total += 1
				}
			}
		})

		// 组件对象
		var Posts = {
			template: '<p class="post">Welcome posts</p>'
		}
		var app19 = new Vue({
			el: '#app19',
			data: {
				currentView: 'home'
			},
			methods: {
				tary1: function() {
					this.currentView = 'home'
				},
				tary2: function() {
					this.currentView = 'posts'
				},
				tary3: function() {
					this.currentView = 'archive'
				}
			},
			components: {
				home: {
					template: '<p class="home">Welcome home</p>'
				},
				posts: Posts,
				archive: {
					template: '<p class="archive">Welcome archive</p>'
				}
			}
		})

		Vue.directive('colorswatch', function(el, binding){
			el.style.color = binding.value,
			console.log(binding.value)
		})
		new Vue({
			el: '#app20',
			data: {
				message: "自定义指令设置字体颜色 style='green'"
			}
		})

















}