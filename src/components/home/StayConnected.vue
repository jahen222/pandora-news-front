<template>
  <div class="block-style-3">
    <div class="block-title-1">
      <h3>{{ $t('stayConnected') }}</h3>
    </div>
    <div class="block-content">
      <!-- Item -->
      <div class="block-item">
        <div class="block-left">
          <div class="social">
            <i class="fa fa-facebook"></i>
          </div>
          <div class="followers">
            <div class="content">
              <span class="count">75.820</span>
              <span class="text">{{ $t('fans') }}</span>
            </div>
          </div>
        </div>
        <div class="block-right">
          <div class="content">
            <a href="#">{{ $t('likePage') }}</a>
          </div>
        </div>
      </div>
      <!-- /.Item -->
      <!-- Item -->
      <div class="block-item">
        <div class="block-left">
          <div class="social">
            <i class="fa fa-twitter"></i>
          </div>
          <div class="followers">
            <div class="content">
              <span class="count">27.257</span>
              <span class="text">FOLLOWERS</span>
            </div>
          </div>
        </div>
        <div class="block-right">
          <div class="content">
            <a href="#">{{ $t('follow') }}</a>
          </div>
        </div>
      </div>
      <!-- /.Item -->
      <!-- Item -->
      <div class="block-item">
        <div class="block-left">
          <div class="social">
            <i class="fa fa-instagram"></i>
          </div>
          <div class="followers">
            <div class="content">
              <span class="count">19.275</span>
              <span class="text">FOLLOWERS</span>
            </div>
          </div>
        </div>
        <div class="block-right">
          <div class="content">
            <a href="#">{{ $t('follow') }}</a>
          </div>
        </div>
      </div>
      <!-- /.Item -->
    </div>
  </div>
</template>

<script>
export default {
  name: "StayConnected",
};
</script>
