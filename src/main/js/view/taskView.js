App.Views.TaskView = Backbone.View.extend({
    tagName: 'li',

    render: function () {
        this.$el.html( this.model.get('title') );
        return this;
    }
});